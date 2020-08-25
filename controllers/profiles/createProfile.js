const Profile = require('../../models/Profile');
const catchAsync = require('../../errors/catchAsync');

module.exports = catchAsync(async (req, res) => {
  const profile = await Profile.create(req.body);

  res.json({ profile });
});
