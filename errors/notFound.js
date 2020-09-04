const AppError = require('./appError');

module.exports = (req, res, next) => {
  next(
    new AppError('routeNotFound', `route ${req.originalUrl} not found`, 404),
  );
};
