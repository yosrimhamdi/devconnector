const catchAsync = require('../../../errors/catchAsync');
const Profile = require('../../../models/Profile');

module.exports = catchAsync(async (req, res) => {
  let profile = await Profile.findOne({ user: req.user._id });

  profile = await profile.addEducation(req.body);

  res.status(201).json({ status: 'success', profile });
});
