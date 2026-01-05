import nodemailer from "nodemailer";
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

const oAuth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.GMAIL_REDIRECT_URI
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const message = body.message;
    const data = body.config?.data;

    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "hayniescornerartdistrict@gmail.com",
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: accessToken.token || "",
      },
    });

    const info = await transporter.sendMail({
      from: '"HCAD Website" <hayniescornerartdistrict@gmail.com>',
      to: "scott@scottwamba.ch",
      subject: `HCAD - Email ${message}`,
      text: "Please look into contact form error.",
      html: `<h2>Please look into contact form error.</h2><h4>Message</h4><p>${message}</p><h4>Data String</h4><p>${data}</p>`,
      auth: {
        user: "hayniescornerartdistrict@gmail.com",
      },
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
