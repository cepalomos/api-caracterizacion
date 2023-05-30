const response = (req, res, next, statusCode, message, data) => {
  res.status(statusCode).json({
    statusCode,
    message,
    data,
    error: false,
  });
};
const responseError = (err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(statusCode).json({
    statusCode,
    message,
    error: true,
  });
};
module.exports = {
  response,
  responseError,
};
