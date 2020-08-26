const Profile = require('../../models/Profile');
const catchAsync = require('../../errors/catchAsync');

module.exports = catchAsync(async (req, res) => {
  const profiles = await Profile.find().populate('user');

  res.status(200).json({ status: 'success', profiles });
});
