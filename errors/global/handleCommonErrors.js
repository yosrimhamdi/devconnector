const AppError = require('../appError');

module.exports = (err, req, res, next) => {
  const { message, name, code } = err;

  if (code === 11000) {
    const { user, email, handle } = err.keyPattern;

    if (user) {
      err = new AppError('already has a profile.', 403);
    } else if (email) {
      err = new AppError(`email: ${err.keyValue.email} already registered.`, 400);
    } else if (handle) {
      err = new AppError(`handle: ${err.keyValue.handle} already exists.`, 400);
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
