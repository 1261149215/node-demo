const db = require('../app/databse');
class PersonSe {
    async create(data) {
        const {description, age, year, localtion} = data
        const statement = `INSERT INTO userinfo (description, age, year, localtion) VALUES (?, ?, ?, ?);`
        const result = await db.query(statement, [description, age, year, localtion]);
        console.log('createSe', data, result)
        return result;
    }
}
module.exports = new PersonSe();