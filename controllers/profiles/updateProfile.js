const Profile = require('../../models/Profile');
const catchAsync = require('../../errors/catchAsync');

module.exports = catchAsync(async (req, res) => {
  const { user } = req;

  const data = { ...req.body, user: user._id };

  data.skills = data.skills[0].split(',');

  const profile = await Profile.findOneAndReplace({ user: user._id }, data, {
    new: true,
    runValidators: true,
  });

  profile.user = req.user;

  res.status(200).json({ status: 'success', profile });
});
