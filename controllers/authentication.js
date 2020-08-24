const User = require('../models/user.js');
const catchAsync = require('../errors/catchAsync');

const signUp = catchAsync(async (req, res) => {
  await User.create(req.body);
});

module.exports = { signUp };
