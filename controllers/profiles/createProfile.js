const Profile = require('../../models/Profile');
const catchAsync = require('../../errors/catchAsync');

module.exports = catchAsync(async (req, res, next) => {
  const { user } = req;

  const profile = await Profile.create({ ...req.body, user: user._id });

  await user.markHasProfile();

  res.status(201).json({ status: 'success', profile, user });
});
