const AppError = require('../appError');

module.exports = ({ message }) =>
  new AppError('validationError', message.split('failed: ')[1], 400);
