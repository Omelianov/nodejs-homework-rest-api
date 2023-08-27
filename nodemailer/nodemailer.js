const nodemailer = require('nodemailer');
require("dotenv").config();

const { MAIL_PASSWORD } = process.env;


// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     auth: {
//         user: omtest911@gmail.com,
//         pass: MAIL_PASSWORD,
//     },
// });


const nodemailerConfig = {
    service: 'gmail',
    auth: {
        user: 'omtest911@gmail.com',
        pass: MAIL_PASSWORD,
    },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const mail = {
    from: 'omtest911@gmail.com',
    to: 'omelianov.n@gmail.com',
    subject: 'Message from me',
    text: 'This message was sent from Node js server.',
    html:
        'This <i>message</i> was sent from <strong>Node js</strong> server.',
};

transport.sendMail(mail)
    .then(() => console.log("success"))
    .catch(error => console.log(error.message))