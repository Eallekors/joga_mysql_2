const bcrypt = require('bcrypt')
const userDbModel = require('../models/user')
const UserModel = new userDbModel()

class userController {
    async register(req, res){
        bcrypt.hash(req.body.password, 10, (error, cryptPassword) => {
            UserModel.create({
                username: req.body.username,
                email: req.body.email,
                password: cryptPassword
            })
            .then((registered) => {
                req.session.user = {
                    username: registered.username,
                    user_id: registered.id
                }
                res.json({
                    message: 'New user is registered',
                    user:registered,
                    user_session: req.session.user
                })
            })
        })
    }
}

module.exports = new userController()