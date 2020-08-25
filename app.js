const express = require('express');
const cookieParser = require('cookie-parser');

const users = require('./routers/users');
const globalErrorHandler = require('./errors/globalErrorHandler');

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use('/api/users', users);

app.use(globalErrorHandler);

module.exports = app;
