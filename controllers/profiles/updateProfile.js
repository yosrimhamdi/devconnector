const Profile = require('../../models/Profile');
const catchAsync = require('../../errors/catchAsync');

module.exports = catchAsync(async (req, res) => {
  const data = { ...req.body, user: req.user._id };

  const profile = await Profile.findOneAndReplace({ user: req.user._id }, data, {
    new: true,
  });

  res.status(200).json({ status: 'success', profile });
});
