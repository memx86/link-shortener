const errorHandler = (error, req, res, next) => {
  const { type, message } = error;
  switch (type) {
    default:
      return res.status(500).json({ message });
  }
};

module.exports = errorHandler;
