import nodemailer from "nodemailer";
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

const oAuth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.GMAIL_REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.GMAIL_REFRESH_TOKEN });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    let htmlMessage = "<ul>";
    let textMessage = "";
    let subject = "Form Submission";
    let recipient = "";

    Object.entries(body).forEach((entry, index) => {
      if (entry[0] === "subject") {
        subject = entry[1] as string;
      }
      if (entry[0] === "recipient") {
        recipient = entry[1] as string;
      }

      if (
        entry[0] !== "hpFirst" &&
        entry[0] !== "recipient" &&
        entry[0] !== "submit" &&
        entry[0] !== "subject" &&
        entry[1] !== ""
      ) {
        htmlMessage += `<li>${entry[0]}: ${entry[1]}</li>`;
        textMessage += `${entry[0]}: ${entry[1]}${
          Object.entries(body).length - 1 !== index ? ", " : ""
        }`;
      }
    });

    htmlMessage += "</ul>";

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
      to: recipient,
      subject: subject,
      text: textMessage,
      html: htmlMessage,
      auth: {
        user: "hayniescornerartdistrict@gmail.com",
      },
    });

    console.log("Message sent: %s", info.messageId);

    return NextResponse.json(
      {
        success: true,
        message: { first: info.messageId },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
