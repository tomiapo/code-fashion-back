const Review = require("../models/Review");

class ReviewController {
  static async createReview(req, res) {
    try {
      const { user_id, product_id, comments, rating } = req.body;

      const review = await Review.create({
        user_id,
        product_id,
        comments,
        rating,
      });

      res.status(201).json(review);
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Error adding review" });
    }
  }
  static async getAllReview(req, res) {
    const productId = req.params.productId;
    try {
      const reviews = await Review.findAll({
        where: { product_id: productId },
      });

      res.json(reviews);
    } catch (error) {
      res.status(404).json({ error: "Error in search reviews" });
    }
  }
}

module.exports = ReviewController;
