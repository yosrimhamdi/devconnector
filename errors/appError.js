class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.status = statusCode === 500 ? 'error' : 'fail';
    this.statusCode = statusCode;
    this.operational = true;
  }
}

module.exports = AppError;
