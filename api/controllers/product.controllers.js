const ProductService = require("../services/product.services");

class ProductController {
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
}

module.exports = ProductController;
