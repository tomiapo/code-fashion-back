const express = require("express");
const router = express.Router();
const user = require("./user");
const product = require("./product");
const orderHistory = require("./orderHistory");
const admin = require("./admin.routes");
const superAdminRoutes = require("./superadmin.routes");
const review = require("./review.routes");

router.use("/user", user);
router.use("/products", product);
router.use("/orderhistory", orderHistory);
router.use("/admin", admin);
router.use("/superadmin", superAdminRoutes);
router.use("/reviews", review);
module.exports = router;
