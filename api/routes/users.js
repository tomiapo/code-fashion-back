const express = require("express");
const usersRouter = express.Router();

usersRouter.post("/users/logout", (req, res) => {
  //la ruta debera ser modificada una vez se agregue el archivo index
  res.clearCookie("authToken").sendStatus(204); //asume que el nombre de la cookie es 'authToken', debe ser modificado en caso de que se le asigne otro nombre
});
