const AppError = require('../appError');

module.exports = ({ message }) => {
  switch (message) {
    case 'jwt must be provided':
    case 'invalid token':
      return new AppError(
        'accessDenied',
        'Unauthorized. Login to grant access',
        401,
      );

    case 'jwt expired':
      return new AppError('accessDenied', 'Unauthorized. Log in again', 401);

    default:
  }
};
