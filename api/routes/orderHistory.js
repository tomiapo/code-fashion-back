const express = require("express");
const router = express.Router();
const OrderHistoryController = require("../controllers/orderHistory.controller");

router.post("/create", OrderHistoryController.createNewOrder);
router.get("/", OrderHistoryController.getAllOrders);

module.exports = router;
