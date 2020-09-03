const Profile = require('../../models/Profile');
const catchAsync = require('../../errors/catchAsync');

module.exports = catchAsync(async (req, res, next) => {
  const profile = await Profile.create({ ...req.body, user: req.user._id });

  req.profile = profile;

  next();
});
