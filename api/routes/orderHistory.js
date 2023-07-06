const express = require("express");
const router = express.Router();
const OrderHistoryController = require("../controllers/orderHistory.controllers");

router.post("/create", OrderHistoryController.createNewOrder);
router.get("/", OrderHistoryController.getAllOrders);

router.get("/list/:userId", OrderHistoryController.getOrders);

module.exports = router;
