
"use client"

import { useEffect, useState } from "react"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

// components
import { toast } from "../ui/use-toast"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

// types
import { signIn } from "@/types/lucia/auth-action"
import { SignInSchema } from "@/types/lucia/auth-schema"
import { Checkbox } from "../ui/checkbox"

export function SignInForm() {
    
    const router = useRouter()
    const [rememberMe, setRememberMe] = useState(false)
    
    const form = useForm<z.infer<typeof SignInSchema>>({
      resolver: zodResolver(SignInSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    })

    useEffect(() => {
      // On component mount, check if credentials are stored in localStorage
      const savedUsername = localStorage.getItem("username")
      const savedPassword = localStorage.getItem("password")
  
      if (savedUsername && savedPassword) {
        form.setValue("email", savedUsername)
        form.setValue("password", savedPassword)
        setRememberMe(true)
      }
    }, [form])

    async function onSubmit(values: z.infer<typeof SignInSchema>) {
      if(rememberMe) {
        // Save credentials to localStorage
        localStorage.setItem("username", values.email)
        localStorage.setItem("password", values.password)
      } else {
        // Clear credentials from localStorage
        localStorage.removeItem("username")
        localStorage.removeItem("password")
      }
      
      const res = await signIn(values)
      if(res.error) {
        toast({
          variant: "destructive",
          description: res.error,
        })
      } 
      else if(res.success) {
        toast({
          variant: "default",
          title: "Welcome",
          description: "You have successfully logged in to the server",
        })
        router.push("/")
      }
    }
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <Checkbox
                id="rememberMe"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <label htmlFor="rememberMe" className="font-normal text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Remember Me
              </label>
            </div>
            
            <a href="/login/recovery" className="text-xs font-normal leading-none hover:underline">Forgot password?</a>
          </div>

          <Button type="submit">Log in</Button>
        </form>
      </Form>
    )
  }