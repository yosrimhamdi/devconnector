module.exports = (req, res, next) => {
  if (!req.err.operational) {
    console.error(req.err);
  }

  next();
};
