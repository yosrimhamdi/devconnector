const Profile = require('../../models/Profile');
const catchAsync = require('../../errors/catchAsync');
const AppError = require('../../errors/appError');

module.exports = catchAsync(async (req, res, next) => {
  const { _id: id } = req.user;

  if (await Profile.findOne({ user: id })) {
    return next(new AppError('already has a profile.', 401));
  }

  const profile = await Profile.create({ ...req.body, user: id });

  res.status(201).json({ status: 'success', profile });
});
