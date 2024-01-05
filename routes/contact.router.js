// 请求路径 中间件处理的 映射
const Router = require('koa-router');

const {
  create,
} = require('../controller/contact.controller');

// 中间件

// const { 
//   verifyAuth,
//   verifyPermission
// } = require('../middleware/auth.middleware');

// 前缀：/contact
const contactRouter = new Router({
  prefix: '/contact'
});
contactRouter.post('/', create);


// 导出
module.exports = contactRouter;