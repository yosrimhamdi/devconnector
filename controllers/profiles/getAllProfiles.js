const Profile = require('../../models/Profile');
const catchAsync = require('../../errors/catchAsync');

module.exports = catchAsync(async (req, res) => {
  const profiles = await Profile.find();

  res.status(200).json({ status: 'success', profiles });
});
