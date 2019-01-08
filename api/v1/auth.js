var jwt = require("jsonwebtoken");
var constants = require("../../utils/notSecret");

module.exports = (req, res) => {
  const secret = constants.secret;

  var token = jwt.sign({ role: "user" }, secret, {
    algorithm: "HS256",
    expiresIn: "1h"
  });

  res.end(JSON.stringify({ token }));
};
