const User = require("./User");
const Product = require("./Product");
const OrderHistory = require("./Order-history");

OrderHistory.belongsTo(User, { foreignKey: "user_id" });
OrderHistory.belongsTo(Product, { foreignKey: "product_id" });

module.exports = { OrderHistory, Product, User };
