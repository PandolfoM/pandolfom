import ContactEmail from "@/emails/contact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message, recaptchaToken } = await req.json();

  console.log("====================================");
  console.log(process.env.NEXT_PUBLIC_RECAPTCHA_ID);
  console.log("====================================");
  const recaptchaResponse = await fetch(
    `https://recaptchaenterprise.googleapis.com/v1/projects/mjp-web-solutions-476014/assessments?key=${process.env.GOOGLE_API_KEY}`,
    {
      method: "POST",
      body: JSON.stringify({
        event: {
          token: recaptchaToken,
          siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_ID,
          expectedAction: "contact_form",
        },
      }),
    }
  );
  const recaptchaData = await recaptchaResponse.json();

  if (
    !recaptchaData?.riskAnalysis?.score ||
    recaptchaData?.tokenProperties?.valid !== true
  ) {
    console.log("Recaptcha failed", JSON.stringify(recaptchaData, null, 2));
    return NextResponse.json("Recaptcha failed", { status: 400 });
  }

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
