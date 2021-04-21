const jwt = require('jsonwebtoken');

module.exports = token => {
  const payload = jwt.verify(token, process.env.JWT_SECRET);

  return payload;
};
