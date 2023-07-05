const express = require("express");
const router = express.Router();
const showAllProducts = require("../controllers/productControllers");
const ProductController = require("../controllers/product.controllers");

const { Product } = require("../models");
const ProductController = require("../controllers/productControllers");
router.get("/", ProductController.showAllProducts);


router.post("/", ProductController.addProduct);
router.delete("/:id", ProductController.deleteProduct);
router.put("/:id", ProductController.editProduct);
router.get("/:id", ProductController.getSingleProduct);
router.post("/", ProductController.createSingleProduct);


module.exports = router;
