"use client";

import emailjs from "@emailjs/browser";

type TemplateKey = "contact" | "payment";

export type ContactTemplateParams = {
  name: string;
  email: string;
  message: string;
  time: string;
};

export type PaymentTemplateParams = {
  name: string;
  email: string;
  amount: string;
  time: string;
};

type EmailRequest =
  | { template: "contact"; data: ContactTemplateParams }
  | { template: "payment"; data: PaymentTemplateParams };

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const templateMap: Record<TemplateKey, string | undefined> = {
  contact: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID,
  payment: process.env.NEXT_PUBLIC_EMAILJS_PAYMENT_TEMPLATE_ID,
};
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

export async function sendEmail(request: EmailRequest) {
  const templateId = templateMap[request.template];

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Email service is not configured.");
  }

  await emailjs.send(serviceId, templateId, request.data, { publicKey });
}
