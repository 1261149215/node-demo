
const errorHandler = (error, ctx) => {
  let status, message;

  switch (error.message) {
    case 500:
      status = 500;
      message = '服务器内部错误';
    default:
      status = 404;
      message = 'NOT FOUND;'
  }

  ctx.status = status;
  ctx.body = message;
}

module.exports = errorHandler;