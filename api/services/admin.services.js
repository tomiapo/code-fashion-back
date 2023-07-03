const { User } = require("../models");

class AdminService {
  static async getAllUsers() {
    try {
      return await User.findAll({
        attributes: ["id", "firstname", "lastname", "email"],
      });
    } catch (error) {
      console.log(error);
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
      console.error(error);
      return { error: true, data: error };
    }
  }
}
module.exports = AdminService;
