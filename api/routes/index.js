const express = require("express");
const router = express.Router();
const user = require("./user");

// se llaman a todas la rutas definidas antes

router.use("/user", user);

// Se importa todas en una y se la requiere en server.js

module.exports = router;
