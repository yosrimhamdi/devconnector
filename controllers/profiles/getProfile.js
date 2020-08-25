const Profile = require('../../models/Profile');
const catchAsync = require('../../errors/catchAsync');
const AppError = require('../../errors/appError');

const getProfile = catchAsync(async (req, res, next) => {
  const profile = await Profile.findOne({ user: req.user._id });

  if (!profile) {
    return next(new AppError('no profile yet.', 404));
  }

  res.status(200).json({ status: 'success', profile });
});

module.exports = getProfile;
