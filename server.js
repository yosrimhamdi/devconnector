const dotenv = require('dotenv');
const connectDB = require('./connectDB');

dotenv.config();

const app = require('./app');

const { PORT } = process.env;

connectDB();

app.listen(PORT, () => {
  console.log(`server running on localhost:${PORT}`);
});
