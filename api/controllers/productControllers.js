const Product = require("../models/Product");

// Controller function to find all products
const showAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();

    if (products.length === 0) {
      return res.status(404).json({ error: "No products found" }); //if empty, error 404.
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  showAllProducts,
};
