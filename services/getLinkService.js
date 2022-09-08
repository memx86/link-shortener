const { Link } = require("../db/models/linksModel");
const { errors } = require("../helpers");

const getLinkService = async (quickLink) => {
  const link = await Link.findOne({ token: quickLink });
  if (!link)
    throw new errors.LinksError({ type: errors.LinksError.TYPES.NOT_FOUND });
  if (link.tokenTimestamp < Date.now() - 1000 * 60 * 60 * 24 * 30) {
    await Link.findByIdAndDelete(link._id);
    throw new errors.LinksError({ type: errors.LinksError.TYPES.EXPIRED });
  }
  await Link.findByIdAndUpdate(link._id, { hitCount: link.hitCount + 1 });
  return link.link;
};

module.exports = getLinkService;
