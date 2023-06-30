const Token = require("../config/token");

const validateUser = (req, res, next) => {
  const token = req.cookies.authToken;
  if (!token) return res.sendStatus(401);
  const { user } = Token.validateToken(token);

  req.user = user;

  if (user) return next();
};

module.exports = validateUser;
