// 程序入口，越简单越好
const app = require('./app');
// 查看数据库是否连接成功
// const db = require('./app/databse');
// const infoService = require('./service/info.service');
// function test() {
//     const data = {
//       name: 'exampleName',
//       password: 'examplePassword'
//     };
//     infoService.create(data);
//   // const sql = 'SELECT * FROM userInfo';
//   // db.query(sql, (err,data) => {
//   //   if (err) {
//   //     console.log('数据库出错', err);
//   //     return;
//   //   }
//   //   console.log('data',data);
//   // })
// }
// test()
app.listen(3000, () => {
  console.log(`服务器在3000启动成功!`);
});