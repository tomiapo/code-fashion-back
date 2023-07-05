const express = require("express");
const router = express.Router();
const User = require("../models/User");
const AdminController = require("../controllers/admin.controllers");
const { validateToken } = require("../config/token");

function authenticate(req, res, next) {
  const token = req.cookies.authToken;

  if (!token) {
    return res
      .status(401)
      .json({ message: "No se proporcionó un token de autenticación" });
  }

  try {
    const decoded = validateToken(token);

    req.user = decoded.payload;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }
}
router.get("/users", authenticate, AdminController.getAll);
router.delete("/users/:id", AdminController.deleteUser);

module.exports = router;
