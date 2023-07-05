const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/productControllers");

router.get("/", ProductController.showAllProducts);

router.get("/:id", ProductController.getSingleProduct);
router.post("/", ProductController.createSingleProduct);

module.exports = router;
