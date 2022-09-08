const { LinksError } = require("./errors");
const errorPageGenerator = require("./errorPageGenerator");

const errorHandler = (error, req, res, next) => {
  const { type, message } = error;
  switch (type) {
    case LinksError.TYPES.NOT_FOUND:
    case LinksError.TYPES.EXPIRED:
      return res.send(errorPageGenerator(message));
    default:
      return res.status(500).json({ message });
  }
};

module.exports = errorHandler;
