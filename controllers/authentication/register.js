const _ = require('lodash');

const User = require('../../models/User');
const sendToken = require('./sendToken');
const catchAsync = require('../../errors/catchAsync');

const register = catchAsync(async (req, res) => {
  const newUser = await User.create(req.body);

  const user = _.omit(newUser._doc, 'password');

  sendToken(res, 201, user);
});

module.exports = register;
