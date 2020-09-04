const AppError = require('../appError');

module.exports = err => {
  const { keyPattern, message } = err;

  const { user, email, handle } = keyPattern;

  if (message.includes('likes index')) {
    return new AppError('already made a like', 401);
  }

  if (user) {
    return new AppError('hasProfile', 'already has a profile', 403);
  }

  if (email) {
    return new AppError('emailExists', 'email already registered', 400);
  }

  if (handle) {
    return new AppError('handleExists', 'handle already exists', 400);
  }

  return err;
};
