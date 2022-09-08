const express = require("express");

const { errorHandlerWrapper } = require("../helpers");
const { createLinkController, getLinkController } = require("../controllers");

const router = express.Router();

router.post("/", errorHandlerWrapper(createLinkController));
router.get("/:quickLink", errorHandlerWrapper(getLinkController));

module.exports = router;
