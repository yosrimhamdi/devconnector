const sendToken = require('./sendToken');
const catchAsync = require('../../errors/catchAsync');
const User = require('./Test123');

const register = catchAsync(async (req, res) => {
  let user = await User.create(req.body);

  sendToken(res, 201, user);
});

module.exports = register;
