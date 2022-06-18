export default async (req, res) => {
  const mailjet = require('node-mailjet').connect(
    process.env.MAILJET_API_KEY,
    process.env.MAILJET_API_SECRET
  );
  const message = req.body.message;
  const data = req.body.config.data;

  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'scott@scottwamba.ch',
          Name: 'HCAD',
        },
        To: [
          {
            Email: 'scott@scottwamba.ch',
            Name: 'HCAD',
          },
        ],
        Subject: `HCAD - Email ${message}`,
        TextPart: 'Please look into contact form error.',
        HTMLPart: `<h2>Please look into contact form error.</h2><h4>Message</h4><p>${message}</p><h4>Data String</h4><p>${data}</p>`,
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
