// 请求路径 中间件处理的 映射
const Router = require('koa-router');

const {
  create,
  search,
} = require('../controller/info.controller');

// 中间件

// const { 
//   verifyAuth,
//   verifyPermission
// } = require('../middleware/auth.middleware');

// 前缀：/info
const InfoRouter = new Router({
  prefix: '/info'
});
InfoRouter.post('/create', create);
InfoRouter.get('/search', search);


// 导出
module.exports = InfoRouter;