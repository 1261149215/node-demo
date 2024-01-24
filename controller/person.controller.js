const PersonSe = require('../service/person.service')

class PersonCon {
    async create(ctx, next) {
        const info = ctx.request.body;
        // console.log('info',info)
        info.location = JSON.stringify(ctx.request.body.location)
        info.skills = JSON.stringify(ctx.request.body.skills)
        info.jobs = JSON.stringify(ctx.request.body.jobs)
        info.projects = JSON.stringify(ctx.request.body.projects)
        // 查询数据库 -> 抽离到service
        const result = await PersonSe.create(info);
        if (result) {
            ctx.body = {
                code: 200,
                data: result
            };
        } else {
            ctx.status = 500; // 或者其他适当的状态码
            ctx.body = {
                code: 500,
                message: "Database insertion failed"
            };
        }
    }
    async search(ctx, next) {
        const info = ctx.request.body;
        // 查询数据库 -> 抽离到service
        const result = await PersonSe.search(info);
        if (result) {
            ctx.body = {
                code: 200,
                data:result[0]
            }
            console.log(result)
        } else {
            ctx.status = 500; // 或者其他适当的状态码
            ctx.body = {
                code: 500,
                message: "Database insertion failed"
            };
        }
    }
}

module.exports = new PersonCon();