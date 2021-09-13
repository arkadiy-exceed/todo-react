const User = require('./models/UserModel');

class authController {
    async registration(req, res) {
        const { username, password } = req.body;

        try {
            const user = await User.create({
                username: username,
                password: password
            });

            res.send(user)
            console.log(user)
        } catch(e) {

        }
    }

    async login(req, res) {
        const { username, password } = req.body;
        
        try {
            const user =  await User.findOne({
                username: username
            })
            if(!user) {
                res.send('user doesnt exist')
            } else {
                if (user.password === password) {
                    res.send('success')
                } else {
                    res.send('invalid password')
                }
            }
        } catch(e) {

        }
    }

    async getUsers(req, res) {
        try {
            res.send('server work');
        } catch(e) {

        }
    }
}

module.exports = new authController();