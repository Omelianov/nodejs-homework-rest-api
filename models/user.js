const { Schema, model } = require("mongoose")
const Joi = require("joi");

const { handleSaveErrors } = require("../helpers")

const emailRegexp = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
const allowedSubscriptions = ["starter", "pro", "business"]

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        match: emailRegexp,
        unique: true,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        minlength: 6,
        required: [true, 'Password is required'],
    },
    token: {
        type: String,
        default: null
    },
    subscription: {
        type: String,
        default: "starter",
        enum: allowedSubscriptions
    },
    avatarURL: {
        type: String,
        required: true,
    },
    verify: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
        required: [true, 'Verify token is required'],
        default: ""
    }
}, { versionKey: false, timestamps: true })

userSchema.post("save", handleSaveErrors)

const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
})

const loginSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
})

// const subscriptionSchema = Joi.object({
//     subscription: Joi.string().valid(...allowedSubscriptions).required()
// })

const verifyEmailSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
})


const schemas = {
    registerSchema,
    loginSchema,
    verifyEmailSchema,
    // subscriptionSchema
}

const User = model("user", userSchema)

module.exports = {
    User,
    schemas,
}