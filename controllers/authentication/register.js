const User = require('../../models/User');
const sendToken = require('./sendToken');
const catchAsync = require('../../errors/catchAsync');

const register = catchAsync(async (req, res) => {
  const user = await User.create(req.body);

  sendToken(res, 201, { id: user._id });
});

module.exports = register;
