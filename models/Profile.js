const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    unique: true,
  },
  handle: {
    type: String,
    required: [true, 'is required.'],
    maxlength: 40,
    unique: true,
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
      message: 'is required.',
    },
  },
  bio: String,
  githubUserName: String,
  social: {
    youtube: String,
    twitter: String,
    facebook: String,
    linkedin: String,
    instagram: String,
  },
  createdAt: {
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
      fieldOfStudy: {
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

profileSchema.pre(/^find/, function (next) {
  this.populate('user');

  next();
});

profileSchema.methods.addEducation = async function (data) {
  this.education.unshift(data);

  return this.save();
};

profileSchema.methods.deleteEducation = async function (id) {
  this.education = this.education.filter(({ _id }) => String(_id) !== id);

  return this.save();
};

profileSchema.methods.addExperience = async function (data) {
  this.experience.unshift(data);

  return this.save();
};

profileSchema.methods.deleteExperience = async function (id) {
  this.experience = this.experience.filter(({ _id }) => String(_id) !== id);

  return this.save();
};

const Profile = model('Profile', profileSchema);

module.exports = Profile;
