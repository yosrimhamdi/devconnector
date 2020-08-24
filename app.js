const express = require('express');

const users = require('./routers/users');

const app = express();

app.use(express.json());

app.use('/api/users', users);

module.exports = app;
