class AppError extends Error {
  constructor(errName, message, statusCode) {
    super(message);

    this.status = statusCode === 500 ? 'error' : 'fail';
    this.statusCode = statusCode;
    this.operational = true;
    this.errName = errName;
  }
}

module.exports = AppError;
