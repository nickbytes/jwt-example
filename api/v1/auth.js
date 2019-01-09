var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  var token = jwt.sign({ role: "user" }, process.env.JWT_SECRET, {
    algorithm: "HS256",
    expiresIn: "1h"
  });

  res.end(JSON.stringify({ token }));
};
