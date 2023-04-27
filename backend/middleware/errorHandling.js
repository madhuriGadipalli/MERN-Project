export const notFound = (req, res, next) => {
  const error = new Error(`404 not found, ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  console.log("statuscode", res.statusCode);
  const statuscode = res.statusCode === 200 ? 500 : res.statusCode;
  if (statuscode) {
    res.status(statuscode);
    res.json({
      message: err.message,
      stack: err.stack,
    });
  }
};
