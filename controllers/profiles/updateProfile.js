const Profile = require('../../models/Profile');

module.exports = async (req, res) => {
  const profile = await Profile.findOneAndUpdate({ user: req.user._id }, req.body, {
    new: true,
  });

  res.status(200).json({ status: 'success', profile });
};
