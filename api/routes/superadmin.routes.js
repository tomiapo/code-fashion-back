const express = require("express");
const router = express.Router();
const SuperAdminController = require("../controllers/superadmin.controllers");
const { validateToken } = require("../config/token");

function superAdminAuth(req, res, next) {
  const token = req.cookies.authToken;

  if (!token) {
    return res
      .status(401)
      .json({ message: "No se proporcionó un token de autenticación" });
  }

  try {
    const decoded = validateToken(token);

    if (!decoded || !decoded.payload || !decoded.payload.id) {
      return res.status(401).json({ message: "Token inválido" });
    }

    req.user = decoded.payload;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }
}

router.get("/users", superAdminAuth, SuperAdminController.getAllUsers);
router.get("/promote/:userId", SuperAdminController.promoteToAdmin);

router.post("/revoke/:userId", SuperAdminController.revokeAdminPrivileges);

module.exports = router;
