const express = require('express');
const cookieParser = require('cookie-parser');

const users = require('./routers/users');
const { handleCommonErrors, sendError } = require('./errors/globalHandlers');

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use('/api/users', users);

app.use(handleCommonErrors, sendError);

module.exports = app;
