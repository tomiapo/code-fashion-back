class UserController {
  static async getAll(req, res) {
    try {
      const users = await AdminService.getAllUsers();
      if (users.length === 0) {
        return res.status(404).json({ error: "No users found" });
      }
      return res.json(users);
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
  static async checkoutPurchase(req, res) {
    console.log(req.body);
  }
}
module.exports = UserController;
