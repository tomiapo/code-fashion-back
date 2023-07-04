const express = require("express");
const router = express.Router();
const SuperAdminController = require("../controllers/superadmin.controllers");

router.get("/users", SuperAdminController.getAllUsers);

// Promote a user to admin
router.get("/promote/:userId", SuperAdminController.promoteToAdmin);

// Revoke admin privileges
router.post("/revoke/:userId", SuperAdminController.revokeAdminPrivileges);

module.exports = router;
