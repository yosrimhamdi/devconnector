const path = require('path');

module.exports = (req, res) => {
  res.set('Access-Control-Allow-Origin', 'https://yosrimhamdi.netlify.app/');

  res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
};
