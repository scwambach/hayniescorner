const nodemailer = require('nodemailer');

export default async (req, res) => {
  const message = req.body.message;
  const data = req.body.config.data;

  async function main() {
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
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

  main()
    .then(() => {
      return res.status(200).json({ message: 'Success' });
    })
    .catch(() => {
      return res.status(500).json({ message: console.error });
    });
};
