import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "./template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (data: {
  name: string;
  date: {
    from: Date;
    to: Date;
  };
  rooms: number;
  adults: number;
  children: number;
  phone: string;
}) => {
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
};
