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
}

module.exports = OrderHistoryController;
