const catchAsync = require('../../../errors/catchAsync');
const Profile = require('../../../models/Profile');

module.exports = catchAsync(async (req, res) => {
  const profile = await Profile.findOne({ user: req.user._id });

  const newProfile = await profile.addEducation(req.body);

  res.status(201).json({ status: 'success', profile: newProfile });
});
