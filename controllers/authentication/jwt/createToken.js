const jwt = require('jsonwebtoken');

const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

module.exports = payload => {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });

  return token;
};
