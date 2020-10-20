const express = require('express');

const { requireLogIn } = require('../controllers/authentication');
const {
  getProfile,
  createProfile,
  updateProfile,
  getProfiles,
  getProfileByHandle,
  requireProfile,
  getProfilePages,
} = require('../controllers/profiles');

const {
  addEducation,
  deleteEducation,
} = require('../controllers/profiles/education');

const {
  addExperience,
  deleteExperience,
} = require('../controllers/profiles/experience');

const router = express.Router();

router.get('/all', getProfiles);

router.get('/pages', getProfilePages);

router.get('/:handle', getProfileByHandle);

router.use(requireLogIn);

router.route('/').get(getProfile).post(createProfile).put(updateProfile);

router.use(requireProfile);

router.post('/education', addEducation);

router.delete('/education/:id', deleteEducation);

router.post('/experience', addExperience);

router.delete('/experience/:id', deleteExperience);

module.exports = router;
