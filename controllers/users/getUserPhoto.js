const catchAsync = require('../../errors/catchAsync');
const User = require('../../models/User');

module.exports = catchAsync(async (req, res) => {
  const { photo } = await User.findById(req.params.id);

  res.writeHead(200, { 'Content-type': photo.mimetype });

  res.end(photo.buffer);
});
