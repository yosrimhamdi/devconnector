const { NODE_ENV } = process.env;

module.exports = (req, res) => {
  const { statusCode = 500, status = 'error', operational } = req.err;

  let { message } = req.err;

  const response = { status, message, error: req.err };

  if (NODE_ENV === 'production') {
    delete response.error;

    if (!operational) {
      message = 'something went wrong.';

      console.error(req.err);
    }
  }

  res.status(statusCode).json(response);
};
