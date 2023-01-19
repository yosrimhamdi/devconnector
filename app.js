const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const compression = require('compression');
const cors = require('cors');
const path = require('path');

const users = require('./routers/users');
const profiles = require('./routers/profiles');
const posts = require('./routers/posts');

const {
  handleExpectedErrors,
  logError,
  sendError,
} = require('./errors/global');
const notFound = require('./errors/notFound');
const sendReactApp = require('./controllers/sendReactApp');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors({ origin: 'https://www.mhamdi.co' }));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(compression());

app.use('/api/users', users);

app.use('/api/profiles', profiles);

app.use('/api/posts', posts);

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', sendReactApp);

app.all('*', notFound);

app.use(handleExpectedErrors, logError, sendError);

module.exports = app;
