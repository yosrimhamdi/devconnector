const User = require('../models/user.js');
const catchAsync = require('../errors/catchAsync');

const signUp = catchAsync(async (req, res) => {
  const user = await User.create(req.body);

  console.log(user);

  res.status(200).json({ user: 3 });
});

module.exports = { signUp };
