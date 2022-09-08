class LinksError extends Error {
  constructor({ type, message }) {
    super(message ?? type);
    this.type = type;
  }
}
LinksError.TYPES = {
  NOT_FOUND: "No such link",
  EXPIRED: "Link expired",
};

module.exports = { LinksError };
