const express = require("express");
const router = express.Router();
const showAllProducts = require("../controllers/productControllers");
const { Product } = require("../models");

router.get("/", showAllProducts);

router.get("/:id", (req, res) => {
  const productId = req.params.id;

  Product.findByPk(productId)
    .then((product) => {
      res.send(product);
      if (!product) {
        return res.status(402).json({ error: "Product not found" });
      }
    })
    .catch((error) => {
      res.send(error);
    });
});
router.post("/", (req, res) => {
  Product.create(req.body).then((products) => res.send(products));
});

module.exports = router;
