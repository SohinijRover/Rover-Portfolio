import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  project: z.string().min(10, "Tell me a bit more about the opportunity"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
