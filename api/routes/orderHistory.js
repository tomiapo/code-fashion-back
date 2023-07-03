const express = require("express");
const router = express.Router();
const OrderHistory = require("../models/Order-history");

router.post("/create", async (req, res) => {
  try {
    const { orderId, userId, productId, productQuantity, totalAmount } =
      req.body;

    const order = await OrderHistory.create({
      orderId,
      userId,
      productId,
      productQuantity,
      totalAmount,
    });

    res.status(201).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error adding products to order history" });
  }
});

router.get("/list", async (req, res) => {
  try {
    const orders = await OrderHistory.findAll();
    if (!orders.length) {
      return res.status(404).json({ error: "No orders found" });
    }
    res.json(orders);
  } catch (error) {
    res.status(404).json({ error: "Error bringing orders" });
  }
});

module.exports = router;
