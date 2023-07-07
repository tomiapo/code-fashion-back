require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const db = require("./config/db");
const morgan = require("morgan");

const routes = require("./routes");
const User = require("./models/User");
const { OrderHistory, Product } = require("./models");
const cookieParser = require("cookie-parser");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.URL_CLIENT }));
app.use("/api", routes);
app.get("/", (req, res) => {
  res.send("Hello World");
});

db.sync({ force: false }).then(
  app.listen(PORT, () => {
    console.log("Server listening at port", PORT);
  })
);
