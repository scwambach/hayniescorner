const nodemailer = require('nodemailer');
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
      from: '"HCAD Website" <mailbot@hayniescorner.com>',
      to: recipient,
      subject: subject,
      text: textMessage,
      html: htmlMessage,
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
