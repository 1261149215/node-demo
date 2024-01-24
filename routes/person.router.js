// 请求路径 中间件处理的 映射
const Router = require('koa-router');

const {
  create,
  search
} = require('../controller/person.controller');

// 中间件

// const { 
//   verifyAuth,
//   verifyPermission
// } = require('../middleware/auth.middleware');

// 前缀：/person
const PersonRouter = new Router({
  prefix: '/person'
});
PersonRouter.post('/create', create);
PersonRouter.get('/search', search);


// 导出
module.exports = PersonRouter;