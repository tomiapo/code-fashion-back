const Sequelize = require("sequelize");
const db = new Sequelize(process.env.DB_NAME, null, null, {
  dialect: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  logging: false,
});

module.exports = db;
