const { verifyToken } = require('../../utils/jwt');
const catchAsync = require('../../errors/catchAsync');
const User = require('./Test123');
const AppError = require('../../errors/appError');

const requireLogIn = catchAsync(async (req, res, next) => {
  const { _id } = verifyToken(req.cookies.jwt);

  const user = await User.findById(_id);

  if (!user) {
    return next(
      new AppError(
        'userNotFound',
        'user not found. Please register instead',
        401,
      ),
    );
  }

  req.user = user;

  next();
});

module.exports = requireLogIn;
