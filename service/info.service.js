const db = require('../app/databse');

class InfoService {
  async create(data) {
    const {name, password} = data;
    const statement = `INSERT INTO userinfo (name, password) VALUES (?, ?);`
    const result = await db.query(statement, [name, password]);
    console.log('createSe', data, result)
    return result;
  }
  async search() {
    const statement = `SELECT * FROM userinfo;`
    const result = await db.query(statement);
    return result;
  }
}

module.exports = new InfoService();