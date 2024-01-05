const Koa = require('koa');
// 导入bodyParser中间件，解析json
const bodyParser = require('koa-bodyparser')
// 导入错误信息处置方法
const errorHandler = require('./error-handle');
// 导入路由
const useRoutes = require('../routes');

const app = new Koa();

app.use(bodyParser());

useRoutes(app);

app.on('error', errorHandler);

module.exports = app;