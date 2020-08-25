const AppError = require('../../errors/appError');

module.exports = (err, req, res, next) => {
  if (err.code === 11000) {
    err = new AppError(`email: ${err.keyValue.email} already registered.`, 400);
  }

  req.err = err;

  next();
};
