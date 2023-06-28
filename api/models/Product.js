const Sequelize = require("sequelize");
const db = require("../config/db");

//Modelo Producto
class Product extends Sequelize.Model {}
Product.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING, //string field 255 character
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT, //text field 30,000 characters
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
      unique: true,
    },
  },
  { sequelize: db, modelName: "product" }
);

module.exports = Product;
