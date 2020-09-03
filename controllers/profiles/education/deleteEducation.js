const Profile = require('../../../models/Profile');
const catchAsync = require('../../../errors/catchAsync');

module.exports = catchAsync(async (req, res) => {
  const profile = await Profile.findOne({ user: req.user._id });

  await profile.deleteEducation(req.params.id);

  res.status(200).json({ status: 'success', profile });
});
