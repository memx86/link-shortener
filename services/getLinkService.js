const { Link } = require("../db/models/linksModel");

const getLinkService = async (quickLink) => {
  const link = await Link.findOne({ token: quickLink });
  if (!link) throw new Error("No such link");
  if (link.tokenTimestamp < Date.now() - 1000 * 60 * 60 * 24 * 30) {
    await Link.findByIdAndDelete(link._id);
    throw new Error("Link expired");
  }
  await Link.findByIdAndUpdate(link._id, { hitCount: link.hitCount + 1 });
  return link.link;
};

module.exports = getLinkService;
