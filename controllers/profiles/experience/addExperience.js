const Profile = require('../../../models/Profile');
const catchAsync = require('../../../errors/catchAsync');

module.exports = catchAsync(async (req, res) => {
  let profile = await Profile.findOne({ user: req.user._id });

  profile = await profile.addExperience(req.body);

  res.status(201).json({ status: 'success', profile });
});
