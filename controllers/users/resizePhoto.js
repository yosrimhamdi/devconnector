const sharp = require('sharp');
const catchAsync = require('../../errors/catchAsync');

module.exports = catchAsync(async (req, res, next) => {
  const size = 500;

  resizedPhotoBuffer = await sharp(req.file.buffer)
    .resize(size, size)
    .toFormat('jpeg')
    .toBuffer();

  req.file.buffer = resizedPhotoBuffer;

  next();
});
