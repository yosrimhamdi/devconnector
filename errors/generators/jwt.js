const AppError = require('../appError');

module.exports = ({ message }) => {
  switch (message) {
    case 'jwt must be provided':
    case 'invalid token':
      return new AppError('Unauthorized. Login to grant access.', 401);

    case 'jwt expired':
      return new AppError('Unauthorized. Log in again.', 401);

    default:
  }
};
