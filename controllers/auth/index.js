const register = require("./register")
const login = require("./login")
const getCurrent = require("./getCurrent")
const logout = require("./logout")
const subscription = require("./subscription")
const updateAvatar = require("./updateAvatar")

const { ctrlWrapper } = require("../../helpers");


module.exports = {
    getCurrent: ctrlWrapper(getCurrent),
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),
    logout: ctrlWrapper(logout),
    subscription: ctrlWrapper(subscription),
    updateAvatar: ctrlWrapper(updateAvatar)
}