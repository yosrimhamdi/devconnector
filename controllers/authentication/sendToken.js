const _ = require('lodash');

const { createToken } = require('../../utils/jwt');

module.exports = (res, statusCode, user) => {
  const { JWT_COOKIE_EXPIRES_IN } = process.env;

  const payload = _.omit(
    user._doc,
    '__v',
    'password',
    'createdAt',
    'photo.buffer',
  );

  const token = createToken(payload);

  res.cookie('jwt', token, {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(Date.now() + JWT_COOKIE_EXPIRES_IN * 3600000),
  });

  res.status(statusCode).json({ status: 'success', user: payload });
};
