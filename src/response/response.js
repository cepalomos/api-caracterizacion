const response = (req, res, next, statusCode, message, data) => {
  res.status(statusCode).json({
    statusCode,
    message,
    data,
    error: false,
  });
};
const responseError = (req, res, next, statusCode, message, data) => {
  res.status(statusCode).json({
    statusCode,
    message,
    data,
    error: true,
  });
};
module.exports = {
  response,
  responseError,
};
