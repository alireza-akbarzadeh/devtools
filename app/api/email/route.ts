import { NextResponse } from "next/server";

import { resend } from "@/lib/email";
import SubscribeEmail from "@/app/email/subscribe";

export async function POST(request: Request) {
  const { name, email } = await request.json();

  await resend.emails.send({
    from: "devtools95@gmail.com",
    to: email,
    subject: "Thank you for Subscribing to our Newsletter",
    react: SubscribeEmail({
      name,
      email,
    }),
  });

  return NextResponse.json({
    status: "OK",
  });
}
