const _ = require('lodash');

const User = require('../../models/User');
const AppError = require('../../errors/appError');
const sendToken = require('./sendToken');
const catchAsync = require('../../errors/catchAsync');

const logIn = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(
      new AppError('wrongemailorpassword', 'wrong email or password.', 400),
    );
  }

  const isValid = await user.validatePassword(password);

  if (!isValid) {
    return next(
      new AppError('wrongemailorpassword', 'wrong email or password.', 400),
    );
  }

  user = _.omit(user._doc, 'password');

  sendToken(res, 200, user);
});

module.exports = logIn;
