const express = require("express");
const ReviewControllers = require("../controllers/review.controllers");
const router = express.Router();
const Review = require("../models/Review");

router.get("/product/:productId", ReviewControllers.getAllReview);

router.post("/", ReviewControllers.createReview);

module.exports = router;
