const Profile = require('../../models/Profile');
const catchAsync = require('../../errors/catchAsync');

module.exports = catchAsync(async (req, res) => {
  const { user } = req;

  const profile = await Profile.create({ ...req.body, user: user._id });

  profile.user = user;

  await user.markUserHasProfile();

  res.status(201).json({ status: 'success', profile, user });
});
