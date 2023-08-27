const path = require("path");
const fs = require("fs/promises");
const { User } = require("../../models/user")

const Jimp = require("jimp");

const avatarsDir = path.join(__dirname, "../", "public", "avatars");

const updateAvatar = async (req, res) => {
    const { _id } = req.user;
    const { path: tempUpload, filename } = req.file;
    const extention = filename.split(".").pop();
    const avatarName = `${_id}.${extention}`;

    Jimp.read(tempUpload, (err, image) => {
        if (err) throw err;
        image.resize(250, 250).quality(60).write(`./public/avatars/${avatarName}`);
    });

    const resultUpload = path.join(avatarsDir, avatarName);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("avatars", avatarName);
    await User.findByIdAndUpdate(_id, { avatarURL });

    res.json({ avatarURL });
}


module.exports = updateAvatar;
