const { customAlphabet } = require("nanoid");
const alphabet =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const nanoid = customAlphabet(alphabet, 6);

const { Link } = require("../db/models/linksModel");

const createLinkService = async (link) => {
  const token = nanoid();
  const tokenTimestamp = Date.now();
  const newLink = await Link.create({ link, token, tokenTimestamp });
  return newLink.token;
};

module.exports = createLinkService;
