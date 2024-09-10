const BaseSQLModel = require('./base');

class UserModel extends BaseSQLModel {
    constructor() {
        super('user')
    }

    async findOne(username){
        const account = await super.findOne('username', username)
        return account;
    }

    async create(user){
        const createdUserId = await super.create(user);
        return createdUserId;
    }
}

module.exports = UserModel;