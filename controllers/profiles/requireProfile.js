const Profile = require('../../models/Profile');
const catchAsync = require('../../errors/catchAsync');
const AppError = require('../../errors/appError');

module.exports = catchAsync(async (req, res, next) => {
  const profile = await Profile.findOne({ user: req.user._id });

  if (!profile) {
    return next(
      new AppError(
        'noProfile',
        'you must create profile before add/remove experience, education.',
        401,
      ),
    );
  }

  next();
});
