const User = require("./User");
const Product = require("./Product");
const OrderHistory = require("./Order-history");

OrderHistory.belongsTo(User, { foreignKey: "userId" });
OrderHistory.belongsTo(Product, { foreignKey: "productId" });

module.exports = { OrderHistory, Product, User };
