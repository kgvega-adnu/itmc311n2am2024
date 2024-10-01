"use client"

import { Chrome, Facebook } from "lucide-react";
import { Button } from "../ui/button";

// oath
import { createGoogleAuthorizationURL } from "@/types/lucia/auth-action";
import { toast } from "../ui/use-toast";

export function AuthButton() {

    const onGoogleSignInClicked = async () => {
        console.log("Google clicked")
        const res = await createGoogleAuthorizationURL()
        if(res.error) {
            toast({
                variant: "destructive",
                description: res.error
            })
        }
        else if(res.success) {
            window.location.href = res.data.toString()
        }
    }

    return (
        <>
            <Button variant={"secondary"} onClick={onGoogleSignInClicked}>
                <Chrome className="mr-2 h-4 w-4"/> Sign in with Google
            </Button>
            <Button variant={"secondary"}>
                <Facebook className="mr-2 h-4 w-4"/> Sign in with Facebook
            </Button>
        </>
    )
  }