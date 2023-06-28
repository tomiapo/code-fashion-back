const express = require("express");
const router = express.Router();
const allProductsController = require("../models/Product");
// The `/api/products` endpoint

// Route to get-all-products using it's controller
router.get("/", allProductsController.showAllProducts);

module.exports = router;
