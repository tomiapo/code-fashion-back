const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");
class OrderHistory extends Model {}

OrderHistory.init(
  {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },

    product_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "order_history" }
);

module.exports = OrderHistory;
