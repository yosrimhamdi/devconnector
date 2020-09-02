const catchAsync = require('../../../errors/catchAsync');
const Profile = require('../../../models/Profile');

module.exports = catchAsync(async (req, res) => {
  const profile = await Profile.findOne({ user: req.user._id });

  await profile.deleteExperience(req.params.id);

  res.status(200).json({ status: 'success', profile });
});
