const express = require('express');

const users = require('./routers/users');
const globalErrorHandler = require('./errors/globalErrorHandler');

const app = express();

app.use(express.json());

app.use('/api/users', users);

app.use(globalErrorHandler);

module.exports = app;
