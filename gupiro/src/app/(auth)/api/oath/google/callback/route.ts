

import { db } from "@/database";
import { oathTable, userTable } from "@/database/schema";
import { lucia } from "@/lib/lucia/auth";
import { google } from "@/lib/lucia/oath";
import { eq } from "drizzle-orm";
import { generateId } from "lucia";

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

interface GoogleUser {
    sub: string,
    name: string,
    given_name: string,
    family_name: string,
    picture: string,
    email: string,
    email_verified: boolean
}

export const GET = async (req: NextRequest) => {
    try {
        const url = new URL(req.url);
        const searchParams = url.searchParams;
        const code = searchParams.get("code");
        const state = searchParams.get("state");
    
        if(!code || !state) {
            return Response.json({ error: "Invalid request (code and state)" }, { status: 400 })
        }
        
        const codeVerifier = cookies().get("codeVerifier")?.value;
        const savedState = cookies().get("state")?.value;
        if(!codeVerifier || !savedState) {
            return Response.json(
                { error: "Invalid request (codeVerifier and savedState)" },
                { status: 400 }
            )
        }
        if(savedState !== state) {
            return Response.json(
                { error: "State does not match (savedState and state)" },
                { status: 400 }
            )
        }
    
        const { accessToken, refreshToken, accessTokenExpiresAt } = await google.validateAuthorizationCode(code, codeVerifier)
        const googleRes = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        const googleData = (await googleRes.json()) as GoogleUser
        
        await db.transaction(async (trx) => {
            
            // checks the user if there has already an email account
            const user = await trx.query.userTable.findFirst({
                where: eq(userTable.email, googleData.email)
            })
            
            if(!user) 
            { 
                const ranID = generateId(15) // generate random text for the id

                // Create User
                const createdUserRes = await trx.insert(userTable).values({
                    id: ranID,
                    username: "",
                    passwordHash: "",
                    email: googleData.email,

                    name: googleData.name,
                    avatar: googleData.picture
                })
                console.log("Create User")

                if(createdUserRes.rowCount === 0) {
                    return Response.json(
                        { error: "Failed to create user" },
                        { status: 500 }
                    )
                }
    
                // Create OAuth User
                const createdOAuthAccountRes = await trx.insert(oathTable).values({
                    id: googleData.sub,
                    userId: ranID,
                    providerUserId: googleData.sub,
                    provider: "google",
                    accessToken,
                    expiresAt: accessTokenExpiresAt,
                    refreshToken
                })
                if(createdOAuthAccountRes.rowCount === 0) {
                    return Response.json(
                        { error: "Failed to create user" },
                        { status: 500 }
                    )
                }
                
                // Create Session
                const session = await lucia.createSession(ranID, { expiresIn: 60 * 60 * 24 * 30 })
                const sessionCookie = lucia.createSessionCookie(session.id)
                cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
            }
            else 
            {
                console.log("Updating OAuth Token")

                // Update OAuth User
                const updatedOAuthAccountRes = await trx.update(oathTable).set({
                    accessToken,
                    expiresAt: accessTokenExpiresAt,
                    refreshToken
                })
                .where(eq(oathTable.id, googleData.sub))

                console.log("Updated SQL OAuth Token")
    
                /*if(updatedOAuthAccountRes.rowCount === 0) {
                    trx.rollback()

                    console.log("Rollback")
                    return Response.json(
                        { error: "Failed to update OAuth account" },
                        { status: 500 }
                    )
                }*/

                // Create Session
                const session = await lucia.createSession(user.id, { expiresIn: 60 * 60 * 24 * 30 })
                const sessionCookie = lucia.createSessionCookie(session.id)
                cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
            }
        })
        return NextResponse.redirect(
            new URL("/", process.env.NEXT_PUBLIC_BASE_URL), 
            { status: 302 }
        )
    } 
    catch (error: any) {
        console.error("OAuth error in Vercel:", error);  // Log error to Vercel's logs
        return Response.json(
            { error: error.message || JSON.stringify(error) },  // Return detailed error
            { status: 500 }
        );
    }
}
