"use client"

import React from "react"
import { DropdownMenuItem } from "../ui/dropdown-menu"
import { signOut } from "@/types/lucia/auth-action"
import { toast } from "../ui/use-toast"

export function SignupButton() {
    const onClick = () => {
        signOut()

        toast({
            variant: "default",
            title: "Log out",
            description: "You have successfully signed out to the server",
        })
    }
    return (
        <DropdownMenuItem onClick={onClick}>
            Log out
        </DropdownMenuItem> 
    )
  }