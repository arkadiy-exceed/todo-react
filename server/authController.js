const User = require('./models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {secret} = require('./config.js')

const generateAccessToken = (id) => {
    const payload = {
        id
    }
    return jwt.sign(payload, secret, {expiresIn: '24h'})
} 

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
                const hashPassword = bcrypt.hashSync(password, 7);
                const user = await User.create({
                    email: email,
                    username: username,
                    password: hashPassword
                });
    
                res.send(user)
                console.log(user)
            } 
            const token = generateAccessToken(user._id)
            console.log(token)
            return res.json({token})
        } catch(e) {

        }
    }



    async login(req, res) {
        const { username, password } = req.body;
        console.log(req.body)
        try {
            const user =  await User.findOne({
                username: username
            })
            console.log(user)
            if (!user) {
                res.send({
                    error: 'user doesnt exist'
                })
            }
            // const userPassword =  await User.findOne({
            //     password: password
            // })
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                res.send({
                    error: 'invalid password'
                })
                console.log(validPassword)
            } 
            // else {
            //     res.send('success')
            // }
            const token = generateAccessToken(user._id)
            console.log(token)
            return res.json({token})
            
        } catch(e) {

        }
    }

    async getUsers(req, res) {
        const user = await User.find();
        res.send(user)
    }
}

module.exports = new authController();