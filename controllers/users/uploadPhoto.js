const multer = require('multer');
const AppError = require('../../errors/appError');

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  let err = null;
  const isImage = file.mimetype.startsWith('image');

  if (!isImage) {
    err = new AppError('Not an image. Please provide an image.', 400);
  }

  cb(err, isImage);
};

const upload = multer({ storage, fileFilter });

module.exports = upload.single('photo');
