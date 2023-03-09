const User = require("../models/users.model")

module.exports.usersController = {
    getUsers: async (req, res) => {
        try {
            const users = await User.find()
            res.json(users)
        } catch (error) {
            res.json(error.message)
        }
    },
    postUsers: async (req, res) => {
        try {
            const users = await User.create({
                name: req.body.name
            })
            res.json(users)
        } catch (error) {
            res.json(error.message)
        }
    }
}