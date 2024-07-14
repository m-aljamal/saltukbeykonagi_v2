"use server";
import { sendEmail } from "@/lib/mail";
import { contactFields } from "@/lib/schema";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = async (
  values: z.infer<typeof contactFields>
) => {
  const validatedFields = contactFields.safeParse(values);
  if (!validatedFields.success) {
    throw new Error("Invalid fields");
  }
  const data = validatedFields.data;
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "saltukbeykonagibutikotel@gmail.com",
      subject: "Yeni bir iletisim talebi geldi!",
      html: `
            <h1>Yeni bir iletisim talebi geldi!</h1>
            <p>Adı: ${data.name}</p>
            <p>Telefon: ${data.phone}</p>
            <p>Email: ${data.email}</p>
            <p>Mesaj: ${data.message}</p>
         `,
    });
  } catch (error) {
    throw new Error("Failed to send email");
  }
};
