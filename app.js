const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const compression = require('compression');

const users = require('./routers/users');
const profiles = require('./routers/profiles');
const posts = require('./routers/posts');

const {
  handleExpectedErrors,
  logError,
  sendError,
} = require('./errors/global');
const notFound = require('./errors/notFound');
const sendApp = require('./view/sendApp');

const { NODE_ENV } = process.env;

const app = express();

if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(compression());

app.use('/api/users', users);

app.use('/api/profiles', profiles);

app.use('/api/posts', posts);

if (NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', sendApp);
}

app.all('*', notFound);

app.use(handleExpectedErrors, logError, sendError);

module.exports = app;
