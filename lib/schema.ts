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
