const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");
class OrderHistory extends Model {}

OrderHistory.init(
  {
    orderId: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true }, //id de la orden
    userId: { type: DataTypes.INTEGER, allowNull: false }, // id del usuario que realizo la orden
    productId: { type: DataTypes.ARRAY(DataTypes.INTEGER), allowNull: false }, // array con los ids de los productos comprados
    productQuantity: { type: DataTypes.INTEGER, allowNull: false }, // cantidad de productos distintos adquiridos.
    totalAmount: { type: DataTypes.INTEGER, allowNull: false }, // monto total de la compra
  },
  { sequelize: db, modelName: "Order-history" }
);

module.exports = OrderHistory;
