const express = require("express");

const UserController = require("../controllers/user.controller");

const router = express.Router();
router.put("/:userId", UserController.editUser);

router.post("/create-user", UserController.createUser);

router.post("/login", UserController.loginUser);

router.post("/logout", UserController.logoutUser);

module.exports = router;
