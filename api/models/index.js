const User = require("./User");
const Product = require("./Product");
const OrderHistory = require("./OrderHistory");
const Review = require("./Review");

OrderHistory.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(Review, { foreignKey: "user_id" });
Review.belongsTo(User, { foreignKey: "user_id" });

Product.hasMany(Review, { foreignKey: "product_id" });
Review.belongsTo(Product, { foreignKey: "product_id" });

module.exports = { OrderHistory, Product, User };
