const Sequelize = require("sequelize");
const db = require("../config/db");

class Product extends Sequelize.Model {
  static async searchProducts(searchParam) {
    const foundProducts = await Product.findAll({
      where: { name: { [Sequelize.Op.iLike]: `%${searchParam}%` } },
    });

    return foundProducts;
  }
  static async getAllCategories() {
    const categoriesObjectArray = await Product.findAll({
      attributes: [
        Sequelize.fn("DISTINCT", Sequelize.col("category_name")),
        "category_name",
      ],
    });

    let categoriesArr = [];

    categoriesObjectArray.map((object) => {
      object.category_name.map((category) => {
        categoriesArr.includes(category)
          ? () => {}
          : categoriesArr.push(category);
      });
    });

    return categoriesArr;
  }

  static async getProductsByCategory(category) {
    const products = await Product.findAll();
    const foundProducts = products.filter((product) =>
      product.category_name.includes(category)
    );
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
      type: Sequelize.ARRAY(Sequelize.STRING),
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
