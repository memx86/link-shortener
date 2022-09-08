const { customAlphabet } = require("nanoid");
const alphabet =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const nanoid = customAlphabet(alphabet, 6);

const { Link } = require("../db/models/linksModel");

const createLinkService = async (link) => {
  const token = nanoid();
  const tokenTimestamp = Date.now();
  const newLink = await Link.create({ link, token, tokenTimestamp });
  const HOSTNAME = process.env.HOSTNAME;
  return `${HOSTNAME}/${newLink.token}`;
};

module.exports = createLinkService;
