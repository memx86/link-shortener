const errorHandlerWrapper = (controller) => {
  return (req, res, next) => {
    controller(req, res, next).catch(next);
  };
};

module.exports = errorHandlerWrapper;
