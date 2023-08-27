const { User } = require("../../models/user")

const { RequestError, sendEmail } = require("../../helpers")

const { BASE_URL } = process.env;

const resendEmail = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: "missing required field email" });
    }

    try {
        const user = await User.findOne({ email });

        if (!user || user.verify) {
            throw RequestError(400, "Verification has already been passed");
        }

        const mail = {
            to: email,
            subject: "Verify email",
            html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">Click to verify you email</a>`
        }
        await sendEmail(mail);

        res.json({
            message: "Email send success"
        });
    } catch (error) {
        // Обрабатываем ошибки
        if (error instanceof RequestError) {
            res.status(error.status).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
};

module.exports = resendEmail;