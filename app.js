const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ status: 'succes', data: [1, 2, 3] });
});

module.exports = app;
