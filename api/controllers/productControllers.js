const { errorMonitor } = require("nodemailer/lib/xoauth2");
const Product = require("../models/Product");

class ProductController {
  static async showAllProducts(req, res) {
    try {
      const products = await Product.findAll();

      if (products.length === 0) {
        return res.status(404).json({ error: "No products found" });
      }

      res.json(products);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  static async getSingleProduct(req, res) {
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
  }

  static async createSingleProduct(req, res) {
    try {
      const product = await Product.create(req.body);
      return res.status(201).send(product);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

module.exports = ProductController;
