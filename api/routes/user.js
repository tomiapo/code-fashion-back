const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Create User
router.post("/create-user", (req, res) => {
  User.create(req.body).then((user) => res.send(user));
});

//LOGIN
router.get("/login", async (req, res) => {
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
    if (user.password !== password) {
      return res
        .status(401)
        .send("Correo electrónico o contraseña incorrectos.");
    }
    res.send("Inicio de sesión exitoso.");
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    res.status(500).send("Se produjo un error en el inicio de sesión.");
  }
});
module.exports = router;
