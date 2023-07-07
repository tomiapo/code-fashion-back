const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/product.controllers");

router.get("/", ProductController.showAllProducts);
router.get("/:id", ProductController.getSingleProduct);
router.get("/search/:searchParam", ProductController.searchProducts);
router.get("/categories", ProductController.getAllCategories);
router.get("/categories/:category", ProductController.getProductsByCategory);

router.post("/", ProductController.addProduct);
router.post("/", ProductController.createSingleProduct);

router.delete("/:id", ProductController.deleteProduct);

router.put("/:id", ProductController.editProduct);

module.exports = router;
