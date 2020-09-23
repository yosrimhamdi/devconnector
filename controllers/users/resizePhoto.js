const sharp = require('sharp');
const catchAsync = require('../../errors/catchAsync');

module.exports = catchAsync(async (req, res, next) => {
  req.file.filename = `user-${req.user._id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .toFile(`static/images/${req.file.filename}`);

  next();
});
