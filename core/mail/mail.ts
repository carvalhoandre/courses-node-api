import { FROM_EMAIL } from "../../env.ts";
import type MailData from "./mail.d.ts";

export class Mail {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  async send({ from, to, subject, body }: MailData) {
    try {
      const response = await fetch(`https://api.resend.com/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.key}`,
        },
        body: JSON.stringify({
          from: from || FROM_EMAIL,
          to,
          subject,
          html: body,
        }),
      });

      if (!response.ok)
        throw new Error(`Failed to send email: ${response.statusText}`);

      return { ok: true, response: await response.json() };
    } catch (error) {
      console.error("Error sending email:", error);
      return { ok: false };
    }
  }
}
