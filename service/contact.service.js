const db = require('../app/databse');

class ContactService {
  async create(data) {
    const {email, phone, suggestion} = data;
    const statement = `INSERT INTO contact (email, phone, suggestion) VALUES (?, ?, ?);`
    const result = await db.query(statement, [email,phone,suggestion]);
    console.log('result', result)
  }
}

module.exports = new ContactService();
