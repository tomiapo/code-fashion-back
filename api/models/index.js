const User = require("./User");
const Product = require("./Product");
const OrderHistory = require("./OrderHistory");

OrderHistory.belongsTo(User, { foreignKey: "user_id" });

module.exports = { OrderHistory, Product, User };
