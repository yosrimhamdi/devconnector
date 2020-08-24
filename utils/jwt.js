const jwt = require('jsonwebtoken');

const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

const createToken = payload => {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });

  return token;
};

const verifyToken = token => {
  const payload = jwt.verify(token, JWT_SECRET);

  return payload;
};

module.exports = { createToken, verifyToken };
