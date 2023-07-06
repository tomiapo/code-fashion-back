const { User } = require("../models");
class UserService {
  static async updateUser(userId, userData) {
    try {
      const user = await User.findByPk(userId);
      if (userData.first_name) {
        user.first_name = userData.first_name;
      }
      if (userData.last_name) {
        user.last_name = userData.last_name;
      }
      if (userData.username) {
        user.username = userData.username;
      }
      if (userData.address) {
        user.address = userData.address;
      }
      if (userData.email) {
        user.email = userData.email;
      }
      await user.save();
      return user;
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

module.exports = UserService;
