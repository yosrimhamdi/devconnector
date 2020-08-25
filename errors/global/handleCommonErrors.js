const AppError = require('../appError');

module.exports = (err, req, res, next) => {
  const { message, name } = err;

  if (err.code === 11000) {
    if (err.keyPattern.user) {
      err = new AppError('already has a profile.', 403);
    } else {
      err = new AppError(`email: ${err.keyValue.email} already registered.`, 400);
    }
  }

  if (name === 'ValidationError') {
    err = new AppError(message.split('failed: ')[1], 400);
  }

  switch (message) {
    case 'jwt must be provided': {
      err = new AppError('Unauthorized. Login to grant access.', 401);
      break;
    }
    case 'invalid token': {
      err = new AppError('Unauthrized. Log in again.', 401);
      break;
    }
    default:
  }

  req.err = err;

  next();
};
