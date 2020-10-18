const fs = require('fs');
const AppError = require('../../errors/appError');

module.exports = (req, res, next) => {
  const { photo } = req.user;

  if (photo !== 'default.svg') {
    fs.unlink(`static/images/${photo}`, err => {
      if (err) {
        return next(
          new AppError('couldNotUpdatePhoto', 'something went wrong', 500),
        );
      }
    });
  }

  next();
};
