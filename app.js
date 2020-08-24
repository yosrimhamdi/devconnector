const express = require('express');

const userRouter = require('./routers/user');

const app = express();

app.use('/users', userRouter);

module.exports = app;
