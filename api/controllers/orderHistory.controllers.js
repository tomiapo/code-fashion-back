const OrderHistory = require("../models/OrderHistory");
const sendConfirmationEmail = require("../utils/utils.js");
require("dotenv").config();
class OrderHistoryController {
  static async createNewOrder(req, res) {
    try {
      const { cartItems, loggedUser } = req.body;

      let total_amount = 0;
      const order_details_by_product = [];

      cartItems.forEach((item) => {
        const orderedProductDetails = {
          id: item.id,
          price: item.price,
          quantity: item.quantity,
        };
        total_amount += item.price * item.quantity;

        order_details_by_product.push(JSON.stringify(orderedProductDetails));
      });

      const newOrder = await OrderHistory.create({
        OrderHistories_user_id_fkey: loggedUser.id,
        user_id: loggedUser.id,
        order_details_by_product,
        total_amount,
      });
      sendConfirmationEmail(loggedUser.email);
      res
        .status(201)
        .json({ order: newOrder, message: "Order created successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error adding products to order history" });
    }
  }

  static async getAllOrders(req, res) {
    const orders = await OrderHistory.findAll();
    res.status(200).send(orders);
  }

  static async getOrders(req, res) {
    const UserId = req.params.userId;
    console.log(UserId);
    try {
      const orders = await OrderHistory.findAll({ where: { user_id: UserId } });
      if (!orders.length) {
        return res.status(404).json({ error: "No orders found" });
      }
      res.json(orders);
    } catch (error) {
      res.status(404).json({ error: "Error bringing orders" });
    }
  }
}

module.exports = OrderHistoryController;
