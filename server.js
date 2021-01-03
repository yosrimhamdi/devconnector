const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

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
    console.error(err);
  }
})();

app.listen(PORT, () => {
  console.clear();
  console.log(`server running on localhost:${PORT}`);
});
