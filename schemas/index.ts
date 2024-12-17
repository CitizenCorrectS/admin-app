import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(2, "Password must be at least 2 characters"),
});


export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    name: z.string().min(2, { message: "Name is required" }),
});
