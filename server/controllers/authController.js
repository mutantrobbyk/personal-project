const bcrypt = require('bcrypt')

module.exports = {
    checkLogin: (req, res) => {
        if(req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(401)
        }
    },
    register: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const user = await db.find_email([email])
        if (user.length > 0 ) {
            return res.status(400).send({message: `Email in use.`})
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const newUser = await db.insert_user_info({email})
        db.insert_hash({hash, user_id: newUser[0].user_id })
        .then((result) => {
            req.session.user = result[0]
            res.status(200).send({message: 'Logged in', user: req.session.user, loggedIn: true})
        })
        .catch(err => {
            res.status(500).send({message: 'Failed to register.'})
        })
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const user = await db.find_email_and_hash([email])
        if (user.length === 0) {
            return res.status(400).send({message: 'Email not found.'})
        }
        const result = bcrypt.compareSync(password, user[0].hash)
        if (result) {
            delete user[0].hash
            req.session.user = user[0]
            return res.status(200).send({message: 'Logged in', user: req.session.user, loggedIn: true})
        } else {
            return res.status(401).send({message: 'Failed to login.'})
        }
    }, 
    logout: (req, res) => {
        req.session.destroy()
        res.status(200).send({message: 'Logged out.'})
    },
    currentUser: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        }
    }
}