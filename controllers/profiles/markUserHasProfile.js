const catchAsync = require('../../errors/catchAsync');

module.exports = catchAsync(async (req, res) => {
  req.user.hasProfile = true;

  await req.user.save({ validateBeforeSave: false });

  req.profile.user = req.user;

  res.status(201).json({ status: 'success', profile: req.profile, user: req.user });
});
