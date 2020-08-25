module.exports = (req, res) => {
  const { statusCode = 500, status = 'error', message } = req.err;

  res.status(statusCode).json({ status, message, error: req.err });
};
