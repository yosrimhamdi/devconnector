const Profile = require('../../../models/Profile');
const catchAsync = require('../../../errors/catchAsync');

module.exports = catchAsync(async (req, res) => {
  const profile = await Profile.findOne({ user: req.user._id });

  const newProfile = await profile.addExprience(req.body);

  res.status(201).json({ status: 'success', profile: newProfile });
});
