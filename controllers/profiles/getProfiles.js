const Profile = require('../../models/Profile');
const catchAsync = require('../../errors/catchAsync');
const PROFILE_PER_PAGE = require('../../utils/PROFILE_PER_PAGE');

module.exports = catchAsync(async (req, res) => {
  const profiles = await Profile.find()
    .skip(PROFILE_PER_PAGE * (req.query.page - 1))
    .limit(PROFILE_PER_PAGE);

  res.status(200).json({ status: 'success', profiles });
});
