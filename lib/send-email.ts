const EMAIL_API = "https://mjphub.com/api/emails/send";

type SendEmail = {
  /** Sender display name; the address is MJP Hub's. */
  from: string;
  to: string;
  subject: string;
  /** Rendered as "key: value" lines in the email. */
  emailProps: Record<string, string>;
  text: string;
  /** A fresh Cloudflare Turnstile token; each one works once. */
  captchaToken: string;
};

/** Sends an email through MJP Hub, which checks the Turnstile token. */
export function sendEmail(email: SendEmail) {
  return fetch(EMAIL_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(email),
  });
}
