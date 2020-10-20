const Profile = require('./models/Profile');
const mongoose = require('mongoose');

const profileTemplate = {
  user: '5f8d70edaa50641a144281b0',
  handle: 'test',
  status: 'sdfsdf',
  skills: 'ab',
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
  } catch (err) {
    console.error(err);
    console.log('CONNECTION TO DB FAILED');
  }

  for (i = 4; i < 25; i++) {
    profileTemplate.handle += i;

    try {
      await Profile.create(profileTemplate);

      console.log('document created');
    } catch (err) {
      console.log(err);
    }
  }
})();
