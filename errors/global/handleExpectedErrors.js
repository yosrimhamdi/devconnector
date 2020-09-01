const { unique, validation, jwt, id } = require('../generators');

module.exports = (err, req, res, next) => {
  console.log(err);
  switch (err.name) {
    case 'MongoError':
      err = unique(err);
      break;
    case 'CastError':
      err = id(err);
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

  req.err = err;

  next();
};
