import { NextResponse } from "next/server";
import SubscribeEmail from "@/emails/subscribe";

import { resend } from "@/lib/email";

export async function POST(request: Request) {
  const { name, email } = await request.json();
  try {
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
  } catch (error) {
    console.error(error, "error"); // Log the error
    return NextResponse.error(); // Return an error response
  }
}
