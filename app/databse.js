const mysql = require('mysql');

// 创建连接池，与数据库进行连接
const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'project',
  user: 'gy',
  password: 'Going19960404.', // 数据库密码
});

exports.query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log('连接失败', err)
        reject(err); // 连接失败时，使用 reject 返回错误
      } else {
        connection.query(sql, values, (err, results) => {
          connection.release(); // 释放连接
          if (err) {
            console.log('数据库查询出错', err);
            reject(err); // 查询出错时，使用 reject 返回错误
          } else {
            resolve(results); // 查询成功时，使用 resolve 返回结果
          }
        });
      }
    });
  });
}