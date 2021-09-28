const { userModel } = require("../model");

const userController = {
  getUser: (req, res, next) => {
    res.json({ users: userModel.getAllUser() });
  },

  insertUser: async (req, res, next) => {
    const isComplete = await userModel.insertUser(req.body);
    if (isComplete) {
      res.json({ users: userModel.getAllUser() });
    } else {
      res.json({ error: "No se inserto data." });
    }
  },

  updateUser: (req, res, next) => {
    const isComplete = userModel.updateUser(req.params.id, req.body);
    if (isComplete) {
      res.json({ users: userModel.getAllUser() });
    } else {
      res.json({ error: "No se actualizo data." });
    }
  },

  deleteUser: (req, res, next) => {
    const isComplete = userModel.deleteUser(req.params.id, req.body);
    if (isComplete) {
      res.json({ users: userModel.getAllUser() });
    } else {
      res.json({ error: "No se actualizo data." });
    }
  },
};
module.exports = userController;
