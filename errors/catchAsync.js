module.exports = fn => (req, res, next) => {
  return fn(req, res, next).catch(err => console.log(err));
};
