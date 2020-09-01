module.exports = (req, res) => {
  res.clearCookie('jwt').send('logged out');
};
