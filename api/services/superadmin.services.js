const { User } = require("../models");

class SuperAdminService {
  static async getAllUsers(userId) {
    try {
      const user = await User.findByPk(userId);

      if (!user) {
        throw new Error("User not found");
      }

      if (!user.isSuperAdmin) {
        throw new Error("Not authorized to perform this action");
      }

      return await User.findAll({
        attributes: [
          "id",
          "firstname",
          "lastname",
          "email",
          "isSeller",
          "isSuperAdmin",
        ],
      });
    } catch (error) {
      throw error;
    }
  }

  static async promoteToAdmin(superAdminId, userId) {
    try {
      const superAdmin = await User.findOne({
        where: { id: superAdminId, isSuperAdmin: true },
      });

      if (!superAdmin) {
        throw new Error("Not authorized to perform this action");
      }

      const user = await User.findByPk(userId);

      if (!user) {
        throw new Error("User not found");
      }

      if (user.isSuperAdmin) {
        throw new Error("Cannot promote a SuperAdmin to Admin");
      }

      user.isSeller = true;
      await user.save();

      return user;
    } catch (error) {
      throw error;
    }
  }

  static async revokeAdminPrivileges(superAdminId, userId) {
    try {
      const user = await User.findByPk(userId);

      if (!user) {
        throw new Error("User not found");
      }

      if (!user.isSuperAdmin) {
        throw new Error("Not authorized to perform this action");
      }

      if (user.isSuperAdmin) {
        throw new Error("Cannot revoke SuperAdmin privileges");
      }

      user.isSeller = false;
      await user.save();

      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = SuperAdminService;
