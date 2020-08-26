const AppError = require('./appError');

module.exports = (req, res, next) => {
  next(new AppError(`route ${req.originalUrl} not found.`, 404));
};
