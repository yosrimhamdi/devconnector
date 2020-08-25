module.exports = (req, res) => {
  const { err } = req;

  res.json({ err });
};
