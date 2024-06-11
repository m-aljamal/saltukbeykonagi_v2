"use server";
import { sendEmail } from "@/lib/mail";
import { formFields } from "@/lib/schema";
import { z } from "zod";

export const sendReversationEmail = async (
  values: z.infer<typeof formFields>
) => {
  const validatedFields = formFields.safeParse(values);
  if (!validatedFields.success) {
    throw new Error("Invalid fields");
  }
  const data = validatedFields.data;
  try {
    await sendEmail();
  } catch (error) {
    throw new Error("Failed to send email");
  }
};
