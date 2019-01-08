var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  const secret = "somethingsomething#34";

  var token = jwt.sign({ foo: "bar" }, secret);

  res.end(JSON.stringify({ token }));
};
