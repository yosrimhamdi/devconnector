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

const router = express.Router();

router.get('/all', getAllProfiles);

router.get('/:handle', getProfileByHandle);

router.use(requireLogIn);

router.route('/').get(getProfile).post(createProfile).patch(updateProfile);

router.post('/education', addEducation);

router.delete('/education/:id', deleteEducation);

module.exports = router;
