import * as React from "react";

import Link from "next/link";
import Image from 'next/image';

import logoImage from "@/assets/logo.png";

import { Button } from "@/components/ui/button";
import { Globe, Heart, LocateFixed, Menu, User } from "lucide-react";
import { validateRequest } from "@/lib/lucia/auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { SignupButton } from "./lucia/signup-btn"

const MobileScreen = () => {
    return(
        <div className="fixed top-0 w-full z-50 border-b h-16 bg-inherit flex items-center pl-6 lg:hidden">
            <Menu className="hover:text-stone-400" />
        </div>    
    )
}

export async function Header() {
    const { user } = await validateRequest()

    return(
        <>
            <MobileScreen/>

            {/* 1024px screen structed */}
            <div className="hidden lg:block bg-inherit">
                <div className="fixed top-0 w-screen flex flex-row items-center justify-evenly h-16 bg-inherit z-50 border-b">
                    <a href="/">
                        <Image 
                            src={logoImage}
                            alt="logo"
                            height={27}
                            width={27}
                        />
                    </a>
                    
                    <div className="flex items-center justify-center bg-stone-900 h-[49px] rounded-[32px]">
                        
                        
                        <div className="flex gap-5 px-5">
                            <div className="flex items-center gap-5">
                                <p className="text-sm">Where</p>
                                <input className="bg-inherit h-[49px] outline-0 w-[120px] placeholder-stone-600" type="text" placeholder="Search location"/>
                            </div>
                            <div className="flex items-center text-center gap-2 cursor-pointer hover:text-stone-300">
                                <LocateFixed size={20} />
                                <p className="text-sm">Locate me</p>
                            </div>
                        </div>

                        {/* Line/divider | To-do: When the add dates hovers it disappears */}
                        <div className="border border-l-stone-700 h-7"></div>
     
                        <div className="flex items-center gap-5 hover:bg-stone-800 h-[49px] rounded-[32px] px-5 cursor-pointer">
                            <p className="text-sm">When</p>
                            <p className="text-stone-600">Add dates</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-4 items-center">
                        {user ? (
                            <>
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <Avatar>
                                            <AvatarImage src={user.avatar} alt={user.username}/>
                                            <AvatarFallback><User/></AvatarFallback>
                                        </Avatar>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent> 
                                        <DropdownMenuLabel>{user.username}</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Profile</DropdownMenuItem>
                                        <DropdownMenuItem>Billing</DropdownMenuItem>
                                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                                        <DropdownMenuSeparator />

                                        <SignupButton/>
                                    
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <Heart />
                            </>
                        ) : (
                            <>
                                <a href="/login" className="text-sm hover:underline">Log in</a>
                                <Button asChild>
                                    <Link href="/signup">Sign up</Link>
                                </Button>
                            </>
                        )}
                        <Globe />
                    </div>
                </div>
            </div>
        </>
    )
}
