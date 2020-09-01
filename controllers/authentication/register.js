const _ = require('lodash');

const User = require('../../models/User');
const sendToken = require('./sendToken');
const catchAsync = require('../../errors/catchAsync');

const register = catchAsync(async (req, res) => {
  let user = await User.create(req.body);

  user = _.omit(user._doc, 'password');

  sendToken(res, 201, user);
});

module.exports = register;
