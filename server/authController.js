const User = require('./models/UserModel');

class authController {
    async registration(req, res) {
        const { email, username, password } = req.body;

        try {
            const userEmail = await User.findOne({
                email: email
            })
            const userName = await User.findOne({
                username: username
            })
            if (userEmail) {
                res.send({
                    error: 'existing email'
                })
            } else if (userName) {
                res.send({
                    error: 'existing username'
                })
            } else {
                const user = await User.create({
                    email: email,
                    username: username,
                    password: password
                });
    
                res.send(user)
                console.log(user)
            } 
        } catch(e) {

        }
    }

    async login(req, res) {
        const { username, password } = req.body;
        
        try {
            const userName =  await User.findOne({
                username: username
            })
            const userPassword =  await User.findOne({
                password: password
            })
            if (!userName) {
                res.send({
                    error: 'user doesnt exist'
                })
            } else if (!userPassword) {
                res.send({
                    error: 'invalid password'
                })
            } else {
                res.send('success')
            }
            
        } catch(e) {

        }
    }

    async getUsers(req, res) {
        const user = await User.find();
        res.send(user)
    }
}

module.exports = new authController();