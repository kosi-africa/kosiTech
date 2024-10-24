"use server";

import EmailTemplate from "@/components/emails/EmailTemplate";
import { EmailTemplateProps } from "@/types/emailTemplateProps";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function EmailNotification(contactInforData: EmailTemplateProps) {
  const { data, error } = await resend.emails.send({
    from: "Kosi Tech <partner@kosiafrica.org>",
    to: ["barasa@kosiafrica.org"],
    subject: "Contact Notification",
    react: EmailTemplate(contactInforData),
  });
  if (error) {
    console.log("RESEND:", error);
  }
  return data;
}
