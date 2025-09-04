import { z } from "zod";

export const contactMessageSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

export type ContactMessage = z.infer<typeof contactMessageSchema>;

export interface ContactResponse {
  success: boolean;
  message: string;
}
