const { Product } = require("../models");

class ProductService {
  static async addProduct(productData) {
    try {
      const createdProduct = await Product.create(productData);
      return createdProduct;
    } catch (error) {
      throw new Error("Failed to add product");
    }
  }

  static async deleteProduct(productId) {
    try {
      const deletedProduct = await Product.destroy({
        where: { id: productId },
      });
      if (!deletedProduct) {
        throw new Error("Product not found");
      }
      return deletedProduct;
    } catch (error) {
      throw new Error("Failed to delete product");
    }
  }

  static async editProduct(productId, updatedData) {
    try {
      const [updatedRowsCount, updatedProducts] = await Product.update(
        updatedData,
        {
          where: { id: productId },
          returning: true,
        }
      );
      if (updatedRowsCount === 0) {
        throw new Error("Product not found");
      }
      return updatedProducts[0];
    } catch (error) {
      throw new Error("Failed to edit product");
    }
  }
}

module.exports = ProductService;
