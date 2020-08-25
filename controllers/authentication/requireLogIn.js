const { verifyToken } = require('../../utils/jwt');
const catchAsync = require('../../errors/catchAsync');
const User = require('../../models/User');
const AppError = require('../../errors/appError');

const requireLogIn = catchAsync(async (req, res, next) => {
  const { id } = verifyToken(undefined);

  const user = await User.findById(id);

  if (!user) {
    return next(new AppError('user not found. Please register instead.', 401));
  }

  req.user = user;

  next();
});

module.exports = requireLogIn;
