import ContactEmail from "@/emails/contact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const { data, error } = await resend.emails.send({
    from: "Portfolio <portfolio@mjphub.com>",
    to: ["matt@pandolfo.com"],
    subject: "Contact Form Submission",
    react: ContactEmail({ name, email, message }),
  });

  if (error) {
    return NextResponse.json(error, { status: 400 });
  }

  return NextResponse.json(data, { status: 200 });
}
