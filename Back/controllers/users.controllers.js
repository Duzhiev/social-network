const User = require("../models/users.model");

module.exports.usersController = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.json(error.message);
    }
  },
  postUsers: async (req, res) => {
    try {
      const users = await User.create({
        name: req.body.name,
      });
      res.json(users);
    } catch (error) {
      res.json(error.message);
    }
  },
  editUser: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
        },
        { new: true }
      );
      return res.json(user);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndRemove(req.params.id, { new: true });
      return res.json(`Пользователь удален`);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
};
