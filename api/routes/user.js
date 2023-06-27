const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Create User
router.post("/create-user", (req, res) => {
  User.create(req.body).then((user) => res.send(user));
});

//

module.exports = router;
