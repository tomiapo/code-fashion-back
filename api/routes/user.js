const express = require("express");
const User = require("../models/User");
const { generateToken } = require("../config/token");
const validateUser = require("../middlewares/validateUser");

const router = express.Router();

router.post("/create-user", (req, res) => {
  User.create(req.body).then((user) => res.send(user));
});

router.post("/login", async (req, res) => {
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
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        id: user.id,
        address: user.address,
      };
      const token = generateToken(payload);
      res.cookie("authToken", token);
      res.send({ user: payload, token: token });
    }
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    res.status(500).send("Se produjo un error en el inicio de sesión.");
  }
});

router.get("/me", validateUser, (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  res.clearCookie("authToken").sendStatus(204);
});

module.exports = router;
