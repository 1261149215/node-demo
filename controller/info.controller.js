const infoService = require('../service/info.service')

class InfoController {
    async create(ctx, next) {
        const info = ctx.request.body;
        // 查询数据库 -> 抽离到service
        const {result} = infoService.create(info);
        console.log('createCon', ctx, result)
        ctx.body = {
            code: 200,
            data:result
        }
    }
    async search(ctx, next) {
        const info = ctx.request.body;
        // 查询数据库 -> 抽离到service
        const result = await infoService.search(info);
        ctx.body = {
            code: 200,
            data:result
        }
    }
}

module.exports = new InfoController();