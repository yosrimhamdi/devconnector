const updateUserPhoto = require('./updateUserPhoto');
const resizePhoto = require('./resizePhoto');
const uploadPhoto = require('./uploadPhoto');
const deletePreviousUserPhoto = require('./deletePreviousUserPhoto');
const isRegistered = require('./isRegistered');

module.exports = {
  uploadPhoto,
  updateUserPhoto,
  resizePhoto,
  deletePreviousUserPhoto,
  isRegistered,
};
