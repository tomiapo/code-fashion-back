const express = require("express");
const router = express.Router();
const SuperAdminController = require("../controllers/superadmin.controllers");

router.get("/users", SuperAdminController.getAllUsers);
router.get("/promote/:userId", SuperAdminController.promoteToAdmin);

router.post("/revoke/:userId", SuperAdminController.revokeAdminPrivileges);

module.exports = router;
