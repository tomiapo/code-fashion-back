const User = require("../models/User");
const { generateToken } = require("../config/token");

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

  static async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      return res.status(201).send(user);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        where: { email },
      });

      if (!user) {
        return res
          .status(401)
          .send("Correo electrónico o contraseña incorrectos.");
      }
      const isValid = await user.validatePassword(password);
      if (!isValid) {
        return res.sendStatus(401);
      } else {
        const payload = {
          name: user.first_name,
          lastname: user.last_name,
          email: user.email,
          id: user.id,
          address: user.address,
        };
        const token = generateToken(payload);
        res.cookie("authToken", token);
        res.send({ user: payload, token: token });
      }
    } catch (error) {
      return res
        .status(500)
        .send("Se produjo un error en el inicio de sesión.");
    }
  }

  static logoutUser(req, res) {
    return res.clearCookie("authToken").sendStatus(204);
  }
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
