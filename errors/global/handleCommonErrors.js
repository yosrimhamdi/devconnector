const AppError = require('../../errors/appError');

module.exports = (err, req, res, next) => {
  if (err.code === 11000) {
    err = new AppError(`email: ${err.keyValue.email} already registered.`, 400);
  }

  switch (err.message) {
    case 'jwt must be provided': {
      err = new AppError('Unauthorized. login to grant access.', 401);
    }
    case 'invalid token': {
      err = new AppError('Unauthrized. Log in again.', 401);
      break;
    }
  }

  req.err = err;

  next();
};
