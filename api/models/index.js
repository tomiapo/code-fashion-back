const User = require("./User");
const Product = require("./Product");
const OrderHistory = require("./Order-history");

OrderHistory.belongsTo(User, { as: "user", foreignKey: "userId" });
Product.belongsTo(OrderHistory, {
  as: "orderHistory",
  foreignKey: "productId",
});
OrderHistory.hasMany(Product, { as: "product", foreignKey: "productId" });

module.exports = { OrderHistory, Product, User };
