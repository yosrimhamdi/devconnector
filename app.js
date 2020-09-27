const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
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

const { NODE_ENV } = process.env;

const app = express();

if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use(express.static(path.join(__dirname, 'static')));

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', users);

app.use('/api/profiles', profiles);

app.use('/api/posts', posts);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.use(handleExpectedErrors, logError, sendError);

module.exports = app;
