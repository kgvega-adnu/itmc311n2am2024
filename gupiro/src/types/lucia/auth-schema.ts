import { z } from "zod"

export const SignUpSchema = z
    .object({
        username: z
            .string()
            .min(6, { message: "Username must be at least 6 characters long" })
            .max(50),
        email: z
            .string()
            .min(3)
            .email("This is not a valid email"),
        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters long" })
            .max(32),
        confirmPassword: z
            .string()
            .min(8, { message: "Password must be at least 8 characters long" })
            .max(32)
        })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
})

export const SignInSchema = z.object({
  email: z
      .string()
      .min(3)
      .email("This is not a valid email"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(32)
})