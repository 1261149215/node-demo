const db = require('../app/databse');
class PersonSe {
    async create(data) {
        const {description, age, year, location, status,skills,jobs,projects} = data
        const statement = `INSERT INTO person (description, age, year, location,status,skills,jobs,projects) VALUES (?, ?, ?, ?,?,?,?,?);`
        const result = await db.query(statement, [description, age, year, location,status,skills,jobs,projects]);
        return result;
    }
    async search() {
        const statement = `SELECT * FROM person;`
        const result = await db.query(statement);
        return result;
    }
}
module.exports = new PersonSe();