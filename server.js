const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const app = require('./app');

const { PORT, DATABASE } = process.env;

(async () => {
  try {
    await mongoose.connect(DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('connected to database');
  } catch (err) {
    console.log('connection to database failed');
  }
})();

app.listen(PORT, () => {
  console.log(`running on localhost:${PORT}`);
});
