module.exports = (req, res, next) => {
  const { err } = req;

  res.json({ err });
};
