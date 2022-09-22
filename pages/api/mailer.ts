const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const oAuth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.GMAIL_REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.GMAIL_REFRESH_TOKEN });

export default async (req, res) => {
  async function main() {
    let htmlMessage = '';
    let textMessage = '';
    let subject = 'Form Submission';
    let recipient = '';

    Object.entries(req.body).forEach((entry, index) => {
      if (entry[0] === 'subject') {
        //@ts-ignore
        subject = entry[1];
      }
      if (entry[0] === 'recipient') {
        //@ts-ignore
        recipient = entry[1];
      }

      if (
        entry[0] !== 'hpFirst' &&
        entry[0] !== 'recipient' &&
        entry[0] !== 'submit' &&
        entry[0] !== 'subject' &&
        entry[1] !== ''
      ) {
        htmlMessage += `<li>${entry[0]}: ${entry[1]}</li>`;
        textMessage += `${entry[0]}: ${entry[1]}${
          Object.entries(req.body).length - 1 !== index && ', '
        }`;
      }
    });

    const accessToken = await oAuth2Client.getAccessToken();

    let transporter = await nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'hayniescornerartdistrict@gmail.com',
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken,
      },
    });

    let info = await transporter.sendMail({
      from: '"HCAD Website" <hayniescornerartdistrict@gmail.com>',
      to: recipient,
      subject: subject,
      text: textMessage,
      html: htmlMessage,
      auth: {
        user: 'hayniescornerartdistrict@gmail.com',
      },
    });

    return {
      success: true,
      message: { first: info.messageId },
    };
  }
  const sendMail = await main();
  const { success }: any = await sendMail;

  if (success) {
    return res.status(200).json({ success: true });
  }
};
