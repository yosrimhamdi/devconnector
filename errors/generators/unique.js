const AppError = require('../appError');

module.exports = err => {
  const { keyPattern, keyValue, message } = err;

  const { user, email, handle } = keyPattern;

  if (message.includes('likes index')) {
    return new AppError('already made a like', 401);
  }

  if (user) {
    return new AppError('hasProfile', 'already has a profile.', 403);
  }

  if (email) {
    return new AppError(
      'emailAlreadyExists',
      `email: '${keyValue.email}' already registered.`,
      400,
    );
  }

  if (handle) {
    return new AppError(
      'handleAlreadyExists',
      `handle: '${keyValue.handle}' already exists.`,
      400,
    );
  }

  return err;
};
