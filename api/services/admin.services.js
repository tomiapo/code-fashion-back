const { User } = require("../models");

class AdminService {
  static async getAllUsers() {
    try {
      return await User.findAll({
        attributes: ["id", "first_name", "last_name", "email"],
        where: { is_seller: false, is_super_admin: false },
      });
    } catch (error) {
      return { error: true, data: error };
    }
  }
  static async deleteUser(id) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        console.error("User not found");
      }
      return user;
    } catch ({ response }) {
      const { error } = response.data;

      return { error: true, data: error };
    }
  }
}
module.exports = AdminService;
