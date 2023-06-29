const express = require("express");
const router = express.Router();
const showAllProducts = require("../controllers/productControllers");
const Product = require("../models/Product");
// The `/api/products` endpoint

// Route to get-all-products using it's controller
router.get("/", showAllProducts);

router.get("/products/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
