import { z } from "zod";

export const formFields = z.object({
  name: z.string().min(2).max(50),
  date: z.object({
    from: z.date(),
    to: z.date(),
  }),
  rooms: z.coerce.number().min(1),
  adults: z.coerce.number().min(1),
  children: z.coerce.number(),
  phone: z.string(),
});

export const contactFields = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
  phone: z.string().min(8).max(15),
});