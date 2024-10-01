"use server"

import { generateId } from "lucia"
import { z } from "zod"
import * as argon2 from "argon2"
import { lucia, validateRequest } from "@/lib/lucia/auth"
import { cookies } from "next/headers"

// database
import { eq } from "drizzle-orm"
import { db } from "@/database"
import { userTable } from "@/database/schema"

// types
import { SignInSchema, SignUpSchema } from "./auth-schema"

// oath
import { google } from "@/lib/lucia/oath"
import { generateCodeVerifier, generateState } from "arctic"

// 
export const signUp = async (values: z.infer<typeof SignUpSchema>) => {
  console.log(values)

  const passwordHash = await argon2.hash(values.password)
  const userId = generateId(15)

  try {
    await db.insert(userTable).values({
      id: userId,
      username: values.username,
      passwordHash: passwordHash,
      email: values.email
    });

    // session
    const session = await lucia.createSession(userId, { expiresIn: 60 * 60 * 24 * 30 })
    const sessionCookie = lucia.createSessionCookie(session.id)
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)

    return {
      success: true,
      data: {
        userId,
      },
    }
  } 
  catch(error: any) {
    console.error("Error during SQL execution:", error);
    return {
      error: error?.message,
    }
  }
}

export const signIn = async (values: z.infer<typeof SignInSchema>) => {
  
  // schema checker
  try {
    SignInSchema.parse(values)
  } 
  catch (error: any) {
    return {
      error: error.message,
    }
  }

  // check username if in d db
  const existingUser = await db.query.userTable.findFirst({
    where: (table) => eq(table.email, values.email),
  })

  if(!existingUser) {
    return {
      error: "Email not found",
    }
  }

  if(!existingUser.passwordHash) {
    return {
      error: "Email not found",
    }
  }

  const isValidPassword = await argon2.verify(
    existingUser.passwordHash,
    values.password
  )
  if (!isValidPassword) {
    return {
      error: "Incorrect Email or password",
    }
  }

  const session = await lucia.createSession(existingUser.id, { expiresIn: 60 * 60 * 24 * 30 })
  const sessionCookie = lucia.createSessionCookie(session.id)
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
  
  return {
    success: "Logged in successfully",
  }
}

export const signOut = async () => {
  try {
    const { session } = await validateRequest()

    if (!session) {
      return {
        error: "Unauthorized",
      }
    }

    await lucia.invalidateSession(session.id)

    const sessionCookie = lucia.createBlankSessionCookie()

    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    )
  } catch (error: any) {
    return {
      error: error?.message,
    }
  }
}

// Google Authentication (Action)
export const createGoogleAuthorizationURL = async () => {
  try {
    const state = generateState();
    const codeVerifier = generateCodeVerifier();
  
    cookies().set("codeVerifier", codeVerifier, {
      httpOnly: true,

    })
    cookies().set("state", state, {
      httpOnly: true,
    })

    const url = await google.createAuthorizationURL(
      state, 
      codeVerifier,
      {
        scopes: ["openid", "profile", "email"]
      }
    );
    
    return {
      success: true,
      data: url
    }
  } 
  catch (error: any) {
    return {
      error: error?.message
    }
  }
}
//const tokens = await github.validateAuthorizationCode(code);
