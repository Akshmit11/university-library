import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(1, "Fullname is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  universityId: z.coerce.number().min(1, "University ID is required"),
  universityCard: z.string().nonempty("University card is required"),
  password: z.string().min(8, "Password must have at least 8 characters"),
});

export const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(8, "Password is required"),
});
