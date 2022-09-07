const mongoose = require("mongoose");

const linksSchema = new mongoose.Schema({
  link: { type: String, required: true },
  token: { type: String },
  hitCount: {
    type: Number,
  },
});

const Link = mongoose.model("link", linksSchema);

module.exports = { Link };
