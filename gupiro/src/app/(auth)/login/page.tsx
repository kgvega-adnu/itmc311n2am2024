

import { Header } from "@/components/header";
import { AuthButton } from "@/components/lucia/oath-btn";
import { SignInForm } from "@/components/lucia/login-form";
import { validateRequest } from "@/lib/lucia/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
    const { user } = await validateRequest();
    if(user) return redirect("/");
    
    return(
        <>
            <main className="flex flex-col justify-center items-center h-screen">
                <div className="flex flex-col gap-5 w-96">
                    
                        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">Sign in to Gupiro</h1>

                        <SignInForm/>
                        <hr/>
                        <AuthButton />
                
                </div>

                <div className="text-xs text-center mt-5">
                    Don&apos;t have an account yet? <a href="/signup" className="underline">Sign up</a>
                </div>
            </main>
        </>
    );
}