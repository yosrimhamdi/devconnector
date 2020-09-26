const User = require('../../models/User');
const catchAsync = require('../../errors/catchAsync');
const AppError = require('../../errors/appError');

module.exports = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return next(
      new AppError(
        'alreadyRegisterd',
        `${email} is already a DevConnector account. Please try a different email address`,
        400,
      ),
    );
  }

  res.status(204).json({ user });
});
