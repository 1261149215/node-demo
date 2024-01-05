const contactService = require('../service/contact.service')

class ContactController {
    async create(ctx, next) {
        const contact = ctx.request.body;
        // 查询数据库 -> 抽离到service
        const result = contactService.create(contact);
        ctx.body = {
            code: 200,
            data:result
        }
    }
}

module.exports = new ContactController();