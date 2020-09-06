const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './.env' });

const app = require('./app');

const { PORT, DATABASE } = process.env;

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
    console.log(err);
    console.log('CONNECTION TO DB FAILED');
  }
})();

app.listen(PORT, () => {
  console.clear();
  console.log(`Server running on localhost:${PORT}`);
});
