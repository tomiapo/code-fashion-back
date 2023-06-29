const express = require("express");
const router = express.Router();
const showAllProducts = require("../controllers/productControllers");
// The `/api/products` endpoint

// Route to get-all-products using it's controller
router.get("/", showAllProducts);

module.exports = router;
