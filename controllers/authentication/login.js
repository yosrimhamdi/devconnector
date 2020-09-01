const User = require('../../models/User');
const AppError = require('../../errors/appError');
const sendToken = require('./sendToken');
const catchAsync = require('../../errors/catchAsync');

const logIn = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new AppError('user not foud. Please register instead.', 404));
  }

  const isValid = await user.validatePassword(password);

  if (!isValid) {
    return next(new AppError('invalid password.', 400));
  }

  sendToken(res, 200, user);
});

module.exports = logIn;
