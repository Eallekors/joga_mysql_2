const bcrypt = require('bcrypt')
const userDbModel = require('../models/user')
const UserModel = new userDbModel()


class userController {
    async register(req, res){
        console.log(req.body.username)
                if(req.body.password.length < 10){
                    return res.status(400).json({ message: 'Password is too short' });
            
                }else{
                const cryptPassword = await bcrypt.hash(req.body.password, 10);    
                const newUser = 
                    {
                        username: req.body.username,
                        email: req.body.email,
                        password: cryptPassword
                    }
                const check = await UserModel.findOne(req.body.username);
                
                if(check){
                        return res.status(400).json({ message: 'Username already exists' });
                }else{
                    UserModel.create(newUser)
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
                }
            }
    }

    async login(req, res){
        console.log(req.body.username)
        const check = await UserModel.findOne(req.body.username);
                
    }
}

module.exports = new userController()