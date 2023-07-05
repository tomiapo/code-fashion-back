const UserService = require("../services/user.services");
class UserController {
  static async editUser(req, res) {
    try {
      const userId = req.params.userId;
      const userData = req.body;
      const usersModify = await UserService.updateUser(userId, userData);
      if (usersModify.length === 0) {
        return res.status(404).json({ error: "No user found" });
      }
      return res.json(usersModify);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}
module.exports = UserController;
