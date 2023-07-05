const express = require("express");
const router = express.Router();
const OrderHistoryController = require("../controllers/orderHistory.controllers");

router.post("/create", OrderHistoryController.createNewOrder);
router.get("/", OrderHistoryController.getAllOrders);

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
