const Profile = require('../../models/Profile');
const catchAsync = require('../../errors/catchAsync');
const AppError = require('../../errors/appError');

module.exports = catchAsync(async (req, res, next) => {
  const profile = await Profile.findOne({ handle: req.params.handle });

  if (!profile) {
    return next(new AppError('no profile found.', 404));
  }

  res.status(200).json({ status: 'success', profile });
});
