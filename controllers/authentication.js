const User = require('../models/user.js');
const catchAsync = require('../errors/catchAsync');
const { createToken } = require('../utils/jwt');

const sendToken = (res, statusCode, payload) => {
  const token = createToken(payload);

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  });

  res.status(statusCode).json({ status: 'succes', message: 'logged In.' });
};

const signUp = catchAsync(async (req, res) => {
  const user = await User.create(req.body);

  sendToken(res, 201, { id: user._id });
});

module.exports = { signUp };
