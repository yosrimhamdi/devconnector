const { createToken } = require('../../utils/jwt');

module.exports = (res, statusCode, user) => {
  const { JWT_COOKIE_EXPIRES_IN } = process.env;

  const token = createToken({ id: user._id });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(Date.now() + JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
  });

  res.status(statusCode).json({ status: 'succes', user });
};
