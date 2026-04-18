import { Resend } from "resend";

export const EMAIL_TO = process.env.EMAIL_TO || "info@dynet.nl";
export const EMAIL_FROM = process.env.EMAIL_FROM || "Dynet Website <onboarding@resend.dev>";

export function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is niet ingesteld");
  }
  return new Resend(apiKey);
}
