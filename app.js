const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const users = require('./routers/users');
const profiles = require('./routers/profiles');

const { handleCommonErrors, sendError } = require('./errors/global');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use(cookieParser());

app.use('/api/users', users);

app.use('/api/profiles', profiles);

app.use(handleCommonErrors, sendError);

module.exports = app;
