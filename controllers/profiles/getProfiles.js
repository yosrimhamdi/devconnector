const Profile = require('../../models/Profile');
const catchAsync = require('../../errors/catchAsync');

module.exports = catchAsync(async (req, res) => {
  const profilePerPage = 3;

  const profiles = await Profile.find()
    .skip(profilePerPage * (req.query.page - 1))
    .limit(profilePerPage);

  res.status(200).json({ status: 'success', profiles });
});
