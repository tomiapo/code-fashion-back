const express = require("express");
const router = express.Router();
const User = require("../models/User");
const AdminController = require("../controllers/admin.controllers");

router.get("/users", AdminController.getAll);
router.delete("/users/:id", AdminController.deleteUser);

module.exports = router;
