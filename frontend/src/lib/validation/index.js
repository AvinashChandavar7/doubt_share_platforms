import * as z from "zod";


const passwordMsg = { message: "Password must be at least 8 characters. " }

export const SignupValidation = z.object({
  username: z.string().min(2, { message: "Too short" }).max(50),
  email: z.string().email(),
  password: z.string().min(8, passwordMsg),
  userType: z.string().min(1, { message: "Please select a UserType" }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, passwordMsg)
});
export const PostValidation = z.object({
  studentId: z.string(),
  subject: z.string().min(1, { message: "Please select a subject" }),
  language: z.string().min(1, { message: "Please select a Language" }),
  description: z.string().min(5).max(2200),
  // imgURL: z.string().optional(),
});