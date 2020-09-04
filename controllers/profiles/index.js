const getProfile = require('./getProfile');
const createProfile = require('./createProfile');
const updateProfile = require('./updateProfile');
const getAllProfiles = require('./getAllProfiles');
const getProfileByHandle = require('./getProfileByHandle');
const markUserHasProfile = require('./markUserHasProfile');
const requireProfile = require('./requireProfile');

module.exports = {
  getProfile,
  createProfile,
  updateProfile,
  getAllProfiles,
  getProfileByHandle,
  markUserHasProfile,
  requireProfile,
};
