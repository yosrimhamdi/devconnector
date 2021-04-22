const path = require('path');

module.exports = (req, res) => {
  const filePath = path.join(__dirname, '..', 'client', 'build', 'index.html');

  res.sendFile(filePath);
};
