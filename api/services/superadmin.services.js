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
          "first_name",
          "last_name",
          "email",
          "is_seller",
          "is_super_admin",
        ],
      });
    } catch (error) {
      throw error;
    }
  }

  static async promoteToAdmin(superAdminId, userId) {
    try {
      const superAdmin = await User.findOne({
        where: { id: superAdminId, is_super_admin: true },
      });

      if (!superAdmin) {
        throw new Error("Not authorized to perform this action");
      }

      const user = await User.findByPk(userId);

      if (!user) {
        throw new Error("User not found");
      }

      if (user.is_super_admin) {
        throw new Error("Cannot promote a SuperAdmin to Admin");
      }

      user.is_seller = true;
      await user.save();

      return user;
    } catch (error) {
      throw error;
    }
  }

  static async revokeAdminPrivileges(superAdminId, userId) {
    try {
      const superAdmin = await User.findOne({
        where: { is_super_admin: true },
      });

      if (!superAdmin) {
        throw new Error("SuperAdmin not found");
      }

      if (superAdmin.id !== superAdminId) {
        throw new Error("Not authorized to perform this action");
      }

      const user = await User.findByPk(userId);

      if (!user) {
        throw new Error("User not found");
      }

      if (user.is_super_admin) {
        throw new Error("Cannot revoke SuperAdmin privileges");
      }

      user.is_seller = false;
      await user.save();

      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = SuperAdminService;
