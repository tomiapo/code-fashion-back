const express = require("express");

const UserController = require("../controllers/user.controller");

const router = express.Router();
router.put("/profile/:userId", UserController.editUser);

router.post("/create-user", UserController.createUser);

router.post("/login", UserController.loginUser);

router.post("/logout", UserController.logoutUser);
router.delete("/profile/:userId", UserController.deleteUser);

module.exports = router;
