const AppError = require('../appError');

module.exports = ({ keyPattern, keyValue }) => {
  const { user, email, handle } = keyPattern;

  if (user) {
    return new AppError('already has a profile.', 403);
  }

  if (email) {
    return new AppError(`email: ${keyValue.email} already registered.`, 400);
  }

  if (handle) {
    return new AppError(`handle: ${keyValue.handle} already exists.`, 400);
  }
};
