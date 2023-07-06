const Sequelize = require("sequelize");
const db = require("../config/db");

class Review extends Sequelize.Model {}

Review.init(
  {
    comments: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "review" }
);

module.exports = Review;
