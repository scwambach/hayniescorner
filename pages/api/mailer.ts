export default async (req, res) => {
  let htmlMessage = '';
  let textMessage = '';
  let subject = 'Form Submission';
  let recipient = '';

  const mailjet = require('node-mailjet').connect(
    process.env.MAILJET_API_KEY,
    process.env.MAILJET_API_SECRET
  );

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

  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: recipient,
          Name: `HCAD - ${subject}`,
        },
        To: [
          {
            Email: recipient,
            Name: 'HCAD',
          },
        ],
        Subject: subject,
        TextPart: textMessage,
        HTMLPart: htmlMessage,
        CustomID: 'AppGettingStartedTest',
      },
    ],
  });
  request
    .then((result) => {
      console.log(result.body);
      return res.status(200).json({ message: 'Success' });
    })
    .catch((err) => {
      console.log(err.statusCode);
      return res.status(500).json({ message: err });
    });
};
