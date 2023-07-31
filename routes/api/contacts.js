const express = require("express")
const router = express.Router();


const ctrl = require("../../controllers/contacts")

const { validateBody } = require("../../middlewares");


const { schemas } = require("../../models/contacts.model")


const { ctrlWrapper } = require("../../helpers")


router.get("/", ctrlWrapper(ctrl.listContacts))

router.get("/:id", ctrlWrapper(ctrl.getContactById))

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact))

router.put("/:id", validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateContact))

router.patch("/:id/favorite", validateBody(schemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateFavorite))

router.delete("/:id", ctrlWrapper(ctrl.removeContact))

module.exports = router;




