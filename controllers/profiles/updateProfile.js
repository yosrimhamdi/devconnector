const Profile = require('../../models/Profile');
const catchAsync = require('../../errors/catchAsync');

module.exports = catchAsync(async (req, res) => {
  const profile = await Profile.findOneAndUpdate({ user: req.user._id }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ status: 'success', profile });
});
