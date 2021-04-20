const mongoose = require('mongoose');

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DBURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log('connected to database');
  } catch (err) {
    console.error(err);
  }
};
