const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");
class OrderHistory extends Model {}

OrderHistory.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },

    productQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "Order-history" }
);

module.exports = OrderHistory;
