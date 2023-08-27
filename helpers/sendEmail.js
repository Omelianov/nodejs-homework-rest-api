const nodemailer = require('nodemailer');
require("dotenv").config();

const { MAIL_PASSWORD } = process.env;

const nodemailerConfig = {
    service: 'gmail',
    auth: {
        user: 'omtest911@gmail.com',
        pass: MAIL_PASSWORD,
    },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
    const mail = { ...data, from: "omtest911@gmail.com" };
    transport.send(mail);
    return true;
}

module.exports = sendEmail;