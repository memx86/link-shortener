const express = require("express");

const { errorHandlerWrapper } = require("../helpers");
const { createLinkController, getLinkController } = require("../controllers");

const router = express.Router();

router.post("/", errorHandlerWrapper(createLinkController));
router.get("/:linkId", errorHandlerWrapper(getLinkController));

module.exports = router;
