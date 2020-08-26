const { unique, validation, jwt } = require('../generators');

module.exports = (err, req, res, next) => {
  switch (err.name) {
    case 'MongoError':
      err = unique(err);
      break;

    case 'ValidationError':
      err = validation(err);
      break;

    case 'JsonWebTokenError':
    case 'TokenExpiredError':
      err = jwt(err);
      break;

    default:
  }

  console.log(err.name);

  req.err = err;

  next();
};
