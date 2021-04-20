const dotenv = require('dotenv');
const connect = require('./connect');

dotenv.config();

const app = require('./app');

const { PORT } = process.env;

connect();

app.listen(PORT, () => {
  console.log(`server running on localhost:${PORT}`);
});
