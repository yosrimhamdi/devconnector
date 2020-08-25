const { verifyToken } = require('../../utils/jwt');
const catchAsync = require('../../errors/catchAsync');
const User = require('../../models/User');
const AppError = require('../../errors/appError');

const requireLogIn = catchAsync(async (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return next(new AppError('Unauthorized, please login to get access.', 401));
  }

  const { id } = verifyToken(token);

  const user = await User.findById(id);

  if (!user) {
    return next(new AppError('user not found. Please consider signing up.', 401));
  }

  req.user = user;

  next();
});

module.exports = requireLogIn;
