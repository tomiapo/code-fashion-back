const User = require("./User");
const Product = require("./Product");
const OrderHistory = require("./Order-history");

OrderHistory.belongsTo(User, { foreignKey: "userId" });
OrderHistory.belongsTo(Product, { foreignKey: "productId" });

// OrderHistory.hasMany(Product, { foreignKey: "productId" });

// Product.hasMany(OrderHistory, { foreignKey: "productId" });

module.exports = { OrderHistory, Product, User };