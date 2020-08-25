const Profile = require('../../models/Profile');
const catchAsync = require('../../errors/catchAsync');

const getProfile = catchAsync(async (req, res) => {
  const profile = await Profile.findOne({ user: req.user._id });

  res.status(200).json({ status: 'success', profile });
});

module.exports = getProfile;
