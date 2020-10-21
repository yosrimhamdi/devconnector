const Profile = require('../models/Profile');
const Post = require('../models/Post');
const mongoose = require('mongoose');

const USER = '5f908f5cffbeb7149c4325d6';

const profileTemplate = {
  user: USER,
  handle: 'test',
  status: 'sdfsdf',
  skills: 'ab',
};

const postTemplate = {
  user: USER,
  text: 'this is a super awesome web app',
};

const DATABASE =
  'mongodb+srv://yosri:MUq99BGByx9D5gZS@cluster0.xko7i.mongodb.net/devconnector?retryWrites=true&w=majority';

(async () => {
  try {
    await mongoose.connect(DATABASE, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log('connected to database');

    const profilePromises = [...Array(20).keys()].map(async (value, i) => {
      profileTemplate.handle += i;

      return await Profile.create(profileTemplate);
    });

    try {
      await Promise.all(profilePromises);

      console.log('20 profiles has been created');
    } catch (err) {
      console.log(err);
      console.log('COULD NOT CREATE PROFILES');
    }

    const postPromises = [...Array(18).keys()].map(() => {
      return Post.create(postTemplate);
    });

    try {
      await Promise.all(postPromises);

      console.log('15 posts has been created');
    } catch (err) {
      console.log(err);
      console.log('COULD NOT CREATE POSTS');
    }
  } catch (err) {
    console.log('connection to db failed');
  }

  process.exit(0);
})();
