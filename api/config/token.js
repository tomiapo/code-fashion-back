// configuracion de JWT
const jwt = require("jsonwebtoken");

const SECRET = "secret";

function generateToken(payload) {
  const token = jwt.sign({ payload }, SECRET, { expiresIn: "2h" });
  return token;
}
function validateToken(token) {
  return jwt.verify(token, SECRET);
}
module.exports = { generateToken, validateToken };
