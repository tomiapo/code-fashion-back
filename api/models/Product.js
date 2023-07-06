const Sequelize = require("sequelize");
const db = require("../config/db");

class Product extends Sequelize.Model {
  static async searchProducts(searchParam) {
    const foundProducts = await Product.findAll({
      where: { name: { [Sequelize.Op.iLike]: `%${searchParam}%` } },
    });

    return foundProducts;
  }
}
Product.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    image: {
      type: Sequelize.TEXT,
    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    category_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    brand: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "product", timestamps: true }
);

module.exports = Product;
