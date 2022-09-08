const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { errorHandler } = require("./helpers");
const { linksRouter } = require("./routes");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/", linksRouter);

app.use(errorHandler);

app.use((req, res) => {
  res.status(400).json({ message: "Not found" });
});

module.exports = app;
