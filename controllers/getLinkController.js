const { getLinkService } = require("../services");

const getLinkController = async (req, res) => {
  const quickLink = req.params.linkId;
  const link = await getLinkService(quickLink);
  res.redirect(301, link);
};

module.exports = getLinkController;
