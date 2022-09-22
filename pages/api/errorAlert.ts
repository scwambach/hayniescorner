const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const oAuth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.GMAIL_REDIRECT_URI
);

export default async (req, res) => {
  const message = req.body.message;
  const data = req.body.config.data;

  const accessToken = await oAuth2Client.getAccessToken();

  async function main() {
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
      to: 'scott@scottwamba.ch',
      subject: `HCAD - Email ${message}`,
      text: 'Please look into contact form error.',
      html: `<h2>Please look into contact form error.</h2><h4>Message</h4><p>${message}</p><h4>Data String</h4><p>${data}</p>`,
      auth: {
        user: 'hayniescornerartdistrict@gmail.com',
      },
    });
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  }

  const sendMail = await main();
  const { success }: any = await sendMail;

  if (success) {
    return res.status(200).json({ success: true });
  }
};
