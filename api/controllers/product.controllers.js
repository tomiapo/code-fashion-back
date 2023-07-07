const { errorMonitor } = require("nodemailer/lib/xoauth2");
const Product = require("../models/Product");
const ProductService = require("../services/product.services");

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

  static async addProduct(req, res, next) {
    try {
      const { name, description, price, image, stock, category_name, brand } =
        req.body;

      const productData = {
        name,
        description,
        price,
        image,
        stock,
        category_name,
        brand,
      };

      const createdProduct = await ProductService.addProduct(productData);

      res.status(201).json(createdProduct);
    } catch (error) {
      next(error);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const productId = req.params.id;

      const deletedProduct = await ProductService.deleteProduct(productId);

      res.json(deletedProduct);
    } catch (error) {
      next(error);
    }
  }

  static async editProduct(req, res, next) {
    try {
      const productId = req.params.id;
      const updatedData = req.body;

      const updatedProduct = await ProductService.editProduct(
        productId,
        updatedData
      );

      res.json(updatedProduct);
    } catch (error) {
      next(error);
    }
  }
  static async searchProducts(req, res, next) {
    try {
      const { searchParam } = req.params;
      const foundProducts = await Product.searchProducts(searchParam);
      return res.send(foundProducts);
    } catch (error) {
      return res
        .status(400)
        .send({ msg: "Error searching for products" }, error);
    }
  }
  static async getAllCategories(req, res, next) {
    try {
      const categoriesArr = await Product.getAllCategories();
      return res.send(categoriesArr);
    } catch (error) {
      return res.status(400).send({ msg: "Error getting categories", error });
    }
  }
  static async getProductsByCategory(req, res, next) {
    try {
      const category = req.params.category;
      const foundProducts = await Product.getProductsByCategory(category);
      res.send(foundProducts);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

module.exports = ProductController;
