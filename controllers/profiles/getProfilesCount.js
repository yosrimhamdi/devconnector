const catchAsync = require('../../errors/catchAsync');
const Profile = require('../../models/Profile');
const PROFILE_PER_AGE = require('../../utils/PROFILE_PER_PAGE');

module.exports = catchAsync(async (req, res, next) => {
  const profiles = await Profile.find();

  const count = Math.ceil(profiles.length / PROFILE_PER_AGE);

  res.status(200).json({ count: count });
});
