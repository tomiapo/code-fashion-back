const express = require("express");
const router = express.Router();
const cors = require("cors");
const app = express();
const PORT = 8000;
const db = require("./config/db");
const morgan = require("morgan");
const User = require("./models/User");
const routes = require("./routes");
const cookieParser = require("cookie-parser");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use("/api", routes);
app.get("/", (req, res) => {
  res.send("Hello World");
});

db.sync({ force: false }).then(
  app.listen(PORT, () => {
    console.log("Server listening at port", PORT);
  })
);
