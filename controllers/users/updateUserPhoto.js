const catchAsync = require('../../errors/catchAsync');
const sendToken = require('../authentication/sendtoken');

module.exports = catchAsync(async (req, res) => {
  const { user } = req;

  user.photo = req.file.filename;

  await user.save({ validateBeforeSave: false });

  sendToken(res, 200, user);
});
