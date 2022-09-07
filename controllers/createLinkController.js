const createLinkService = require("../services/createLinkService");

const createLinkController = async (req, res) => {
  const { link } = req.body;
  const quickLink = await createLinkService(link);
  res.status(201).json({ quickLink });
};

module.exports = createLinkController;
