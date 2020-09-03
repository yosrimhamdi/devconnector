const express = require('express');

const { requireLogIn } = require('../controllers/authentication');
const {
  getProfile,
  createProfile,
  updateProfile,
  getAllProfiles,
  getProfileByHandle,
  markUserHasProfile,
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

router.get('/all', getAllProfiles);

router.get('/:handle', getProfileByHandle);

router.use(requireLogIn);

router
  .route('/')
  .get(getProfile)
  .post(createProfile, markUserHasProfile)
  .put(updateProfile);

router.post('/education', addEducation);

router.delete('/education/:id', deleteEducation);

router.post('/experience', addExperience);

router.delete('/experience/:id', deleteExperience);

module.exports = router;
