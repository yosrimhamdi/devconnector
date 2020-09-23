const updateUserPhoto = require('./updateUserPhoto');
const resizePhoto = require('./resizePhoto');
const uploadPhoto = require('./uploadPhoto');
const deletePreviousUserPhoto = require('./deletePreviousUserPhoto');
const checkUserExistence = require('./checkUserExistence');

module.exports = {
  uploadPhoto,
  updateUserPhoto,
  resizePhoto,
  deletePreviousUserPhoto,
  checkUserExistence,
};
