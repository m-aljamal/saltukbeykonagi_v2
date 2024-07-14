"use server";
import { sendEmail } from "@/lib/mail";
import { formFields } from "@/lib/schema";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendReversationEmail = async (
  values: z.infer<typeof formFields>
) => {
  const validatedFields = formFields.safeParse(values);
  if (!validatedFields.success) {
    throw new Error("Invalid fields");
  }
  const data = validatedFields.data;
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "saltukbeykonagibutikotel@gmail.com",
      subject: "Yeni bir rezervasyon talebi geldi!",
      html: `
        <h1>Yeni bir rezervasyon talebi geldi!</h1>
        <p>Adı: ${data.name}</p>
        <p>Telefon: ${data.phone}</p>
        <p>Oda Sayısı: ${data.rooms}</p>
        <p>Yetişkin Sayısı: ${data.adults}</p>
        <p>Çocuk Sayısı: ${data.children}</p>
        <p>Check-in: ${data.date.from}</p>
        <p>Check-out: ${data.date.to}</p>
       `,
    });
  } catch (error) {
    throw new Error("Failed to send email");
  }
};
