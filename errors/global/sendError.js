const { NODE_ENV } = process.env;

module.exports = (req, res) => {
  const { statusCode = 500, status = 'error', operational, errName } = req.err;

  let { message } = req.err;

  const response = { status, [errName]: message };

  if (NODE_ENV === 'production') {
    delete response.error;

    if (!operational) {
      message = 'something went wrong.';

      console.error(req.err);
    }
  }

  res.status(statusCode).json(response);
};
