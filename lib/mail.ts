import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "./template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async () => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "mohammadjamol@gmail.com",
    subject: "Hello world",
    html: `
    <p>Click the link below to reset your email password.</p>
     `,
  });
};
