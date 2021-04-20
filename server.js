require('dotenv').config();

const connect = require('./connect');

const app = require('./app');

const { PORT } = process.env;

connect();

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
