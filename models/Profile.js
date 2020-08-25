const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  handle: {
    type: String,
    required: [true, 'handle is required.'],
    maxlength: 40,
  },
  company: String,
  website: String,
  location: String,
  status: {
    type: String,
    required: [true, 'status is required.'],
  },
  skills: {
    type: [String],
    required: [true, ' skills is required.'],
  },
  bio: String,
  githubusername: String,
  experience: [
    {
      title: {
        type: String,
        required: [true, 'title is required.'],
      },
      company: {
        type: String,
        required: [true, 'company is required.'],
      },
      location: String,
      from: {
        type: Date,
        required: [true, 'location is required.'],
      },
      to: Date,
      current: {
        type: Boolean,
        default: false,
      },
      description: String,
    },
  ],
  education: [
    {
      school: {
        type: String,
        required: [true, 'school name is required.'],
      },
      degree: {
        type: String,
        required: [true, 'degree is required.'],
      },
      fieldofstudy: {
        type: String,
        required: [true, 'field of study is required.'],
      },
      from: {
        type: Date,
        required: [true, 'from is required.'],
      },
      to: Date,
      current: {
        type: Boolean,
        default: false,
      },
      description: String,
    },
  ],
  social: {
    youtube: String,
    twitter: String,
    facebook: String,
    linkedin: String,
    instagram: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;
