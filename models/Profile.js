const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  handle: {
    type: String,
    required: [true, 'is required.'],
    maxlength: 40,
  },
  company: String,
  website: String,
  location: String,
  status: {
    type: String,
    required: [true, 'is required.'],
  },
  skills: {
    type: [String],
    validate: {
      validator(skills) {
        return skills.length !== 0;
      },
      message: 'is required',
    },
  },
  bio: String,
  githubusername: String,
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
  experience: [
    {
      title: {
        type: String,
        required: [true, 'is required.'],
      },
      company: {
        type: String,
        required: [true, 'is required.'],
      },
      location: String,
      from: {
        type: Date,
        required: [true, 'is required.'],
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
        required: [true, 'name is required.'],
      },
      degree: {
        type: String,
        required: [true, 'is required.'],
      },
      fieldofstudy: {
        type: String,
        required: [true, 'field of study is required.'],
      },
      from: {
        type: Date,
        required: [true, 'is required.'],
      },
      to: Date,
      current: {
        type: Boolean,
        default: false,
      },
      description: String,
    },
  ],
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;
