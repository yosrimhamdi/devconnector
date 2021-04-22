const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('./app');

dotenv.config();

const { PORT, DB_URI, DB_USER_PASSWORD } = process.env;

const URI = DB_URI.replace('<password>', DB_USER_PASSWORD);

(async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log('connected to database');
  } catch (err) {
    console.error(err);
  }
})();

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
