const catchAsync = require('../../errors/catchAsync');
const sendToken = require('../authentication/sendToken');

module.exports = catchAsync(async (req, res) => {
  const { user } = req;

  await user.updatePhoto(req.file);

  sendToken(res, 200, user);
});
