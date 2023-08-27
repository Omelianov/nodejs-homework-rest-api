const register = require("./register")
const login = require("./login")
const getCurrent = require("./getCurrent")
const logout = require("./logout")
const verify = require("./verify")
const updateAvatar = require("./updateAvatar")
const resendEmail = require("./resendEmail")

const { ctrlWrapper } = require("../../helpers");


module.exports = {
    getCurrent: ctrlWrapper(getCurrent),
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),
    logout: ctrlWrapper(logout),
    verify: ctrlWrapper(verify),
    updateAvatar: ctrlWrapper(updateAvatar),
    resendEmail: ctrlWrapper(resendEmail)
}