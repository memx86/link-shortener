const mongoose = require("mongoose");

const linksSchema = new mongoose.Schema({
  link: { type: String, required: true },
  token: { type: String, required: true },
  tokenTimestamp: {
    type: Number,
    required: true,
  },
  hitCount: {
    type: Number,
    default: 0,
  },
});

const Link = mongoose.model("link", linksSchema);

module.exports = { Link };
