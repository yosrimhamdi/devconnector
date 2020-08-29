const express = require('express');

const { requireLogIn } = require('../controllers/authentication');
const {
  getProfile,
  createProfile,
  updateProfile,
  getAllProfiles,
  getProfileByHandle,
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

router.get('/', getAllProfiles);

router.get('/:handle', getProfileByHandle);

router.use(requireLogIn);

router.route('/admin').get(getProfile).post(createProfile).put(updateProfile);

router.post('/admin/education', addEducation);

router.delete('/admin/education/:id', deleteEducation);

router.post('/admin/experience', addExperience);

router.delete('/admin/experience/:id', deleteExperience);

module.exports = router;
