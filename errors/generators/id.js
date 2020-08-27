const AppError = require('../appError');

module.exports = err => {
  const model = err.message.split('model ')[1].replace(/"/g, '').toLowerCase();

  return new AppError(`can't find ${model} with id: ${err.value}`, 404);
};
