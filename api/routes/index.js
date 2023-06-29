const express = require("express");
const router = express.Router();
const user = require("./user");
const product = require("./product");
const orderHistory = require("./orderHistory");

// se llaman a todas la rutas definidas antes

router.use("/user", user);
router.use("/products", product);
router.use("/orderhistory", orderHistory);

// Se importa todas en una y se la requiere en server.js

module.exports = router;
