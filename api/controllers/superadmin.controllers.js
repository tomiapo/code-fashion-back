const { User } = require("../models");
const SuperAdminService = require("../services/superadmin.services");

class SuperAdminController {
  static async getAllUsers(req, res, next) {
    try {
      const userId = req.user.id;

      const users = await SuperAdminService.getAllUsers(userId);

      if (users.length === 0) {
        return res.status(404).json({ error: "No users found" });
      }

      return res.json(users);
    } catch (error) {
      next(error);
    }
  }
  static async promoteToAdmin(req, res, next) {
    try {
      const userId = req.params.userId; // Assuming the user's ID to be promoted is passed as a parameter

      // Find the super admin with isSuperAdmin = true
      const superAdmin = await User.findOne({
        where: { is_super_admin: true },
      });

      if (!superAdmin) {
        throw new Error("SuperAdmin not found");
      }

      const superAdminId = superAdmin.id;

      const user = await SuperAdminService.promoteToAdmin(superAdminId, userId);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  static async revokeAdminPrivileges(req, res, next) {
    try {
      const userId = req.params.userId; // Assuming the user's ID to have privileges revoked is passed as a parameter

      // Find the super admin with isSuperAdmin = true
      const superAdmin = await User.findOne({
        where: { isSuperAdmin: true },
      });

      if (!superAdmin) {
        throw new Error("SuperAdmin not found");
      }

      const superAdminId = superAdmin.id;

      const user = await SuperAdminService.revokeAdminPrivileges(
        superAdminId,
        userId
      );
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = SuperAdminController;
