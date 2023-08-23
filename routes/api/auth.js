const express = require("express");

const { validateBody, authenticate } = require("../../middlewares");


const { schemas } = require("../../models/user")

const ctrl = require("../../controllers/auth")

const router = express.Router();

const { upload } = require("../../middlewares");


// signup
router.post("/register", validateBody(schemas.registerSchema), ctrl.register)

// signin
router.post("/login", validateBody(schemas.loginSchema), ctrl.login)

router.get("/current", authenticate, ctrl.getCurrent)

router.get("/logout", authenticate, ctrl.logout)

router.patch('/users/:id/subscription', authenticate, validateBody(schemas.subscriptionSchema), ctrl.subscription)

router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar)

module.exports = router;