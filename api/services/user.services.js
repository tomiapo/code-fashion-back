const { User } = require("../models");
class UserService {
  static async updateUser(userId, userData) {
    try {
      const user = await User.findByPk(userId);
      user.firstname = userData.firstname;
      user.lastname = userData.lastname;
      user.username = userData.username;
      user.address = userData.address;
      user.email = userData.email;
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
