

import React from "react";

import { Button } from "@/components/ui/button";
import { validateRequest } from "@/lib/lucia/auth";
import { signOut } from "@/types/lucia/auth-action";
import { redirect } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { Header } from "@/components/header";

export default async function UserPage() {
    const { user } = await validateRequest()
	if(!user) return redirect("/")

	return(
		<>
			
			<Avatar>
				<AvatarImage src={user.avatar} alt={user.username}/>
				<AvatarFallback><User/></AvatarFallback>
			</Avatar>
			Name: {user.name} <br/>
			Username: {user.username} <br/>
			Email: {user.email} <br/>
			CreatedAt: {user.createdAt} <br/>
			UpdatedAt: {user.updatedAt} <br/>
			<form action={signOut}>
				<Button type="submit" variant="link">Log out</Button>
			</form>
		</>
	)
}