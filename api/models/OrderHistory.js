const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");
class OrderHistory extends Model {}

OrderHistory.init(
  {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    order_details_by_product: {
      type: DataTypes.ARRAY(DataTypes.STRING),

      allowNull: false,
    },
    total_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "OrderHistory" }
);

module.exports = OrderHistory;
