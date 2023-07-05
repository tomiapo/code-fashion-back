const AdminService = require("../services/admin.services");

class AdminController {
  static async getAll(req, res) {
    try {
      const isSeller = req.user.isSeller;
      if (isSeller) {
        const users = await AdminService.getAllUsers();
        if (users.length === 0) {
          return res.status(404).json({ error: "No users found" });
        }

        return res.json(users);
      } else {
        return res.status(403).json({ message: "acceso denegado" });
      }
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const user = await AdminService.deleteUser(id);
      await user.destroy();
      return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}
module.exports = AdminController;
