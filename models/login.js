const BaseSQLModel = require('./base');

class LoginModel extends BaseSQLModel {
    constructor() {
        super('user')
    }

    async findOne(username){
        const account = await super.findOne('username', username)
        return account;
    }

   
}

module.exports = LoginModel;