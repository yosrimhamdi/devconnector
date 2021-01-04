const Profile = require('../../models/Profile');
const catchAsync = require('../../errors/catchAsync');
const PROFILES_PER_PAGE = require('./PROFILES_PER_PAGE');

module.exports = catchAsync(async (req, res) => {
  const profiles = await Profile.find()
    .sort('createdAt')
    .skip(PROFILES_PER_PAGE * (req.query.page - 1))
    .limit(PROFILES_PER_PAGE);

  res.status(200).json({ status: 'success', profiles });
});
