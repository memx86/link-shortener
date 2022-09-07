const express = require("express");

const { errorHandlerWrapper } = require("../helpers");
const { createLinkController } = require("../controllers");

const router = express.Router();

router.post("/", errorHandlerWrapper(createLinkController));

module.exports = router;
