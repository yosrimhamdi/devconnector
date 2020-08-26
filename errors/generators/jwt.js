const AppError = require('../appError');

module.exports = ({ message }) => {
  switch (message) {
    case 'jwt must be provided':
      return new AppError('Unauthorized. Login to grant access.', 401);

    case 'invalid token':
      return new AppError('Unauthrized. Log in again.', 401);

    default:
  }
};
