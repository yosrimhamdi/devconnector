const catchAsync = require('../../errors/catchAsync');
const Profile = require('../../models/Profile');
const PROFILES_PER_PAGE = require('../../utils/PROFILES_PER_PAGE');

module.exports = catchAsync(async (req, res) => {
  const profiles = await Profile.find();

  const count = Math.ceil(profiles.length / PROFILES_PER_PAGE);

  res.status(200).json({ count });
});
