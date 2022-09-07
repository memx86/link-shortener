const createLinkService = require("../services/createLinkService");

const createLinkController = async (req, res) => {
  const { link } = req.body;
  const shortenedLink = await createLinkService(link);
  res.json({ link: shortenedLink });
};

module.exports = createLinkController;
