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
