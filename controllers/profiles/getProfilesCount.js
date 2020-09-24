const catchAsync = require('../../errors/catchAsync');
const Profile = require('../../models/Profile');

module.exports = catchAsync(async (req, res, next) => {
  const profiles = await Profile.find();

  const count = Math.ceil(profiles.length / 3);

  res.status(200).json({ count: count });
});
