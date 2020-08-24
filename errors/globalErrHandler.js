module.exports = (err, req, res, next) => {
  console.log(err);

  req.status(400).json({ status: 'fail' });
};
