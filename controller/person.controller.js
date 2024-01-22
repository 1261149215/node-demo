const PersonSe = require('../service/person.service')

class PersonCon {
    async create(ctx, next) {
        const info = ctx.request.body;
        // 查询数据库 -> 抽离到service
        const {result} = PersonSe.create(info);
        console.log('createCon', result)
        ctx.body = {
            code: 200,
            data:result
        }
    }
}

module.exports = new PersonCon();