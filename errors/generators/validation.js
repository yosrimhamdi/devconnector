const AppError = require('../appError');

module.exports = ({ message }) => new AppError(message.split('failed: ')[1], 400);
