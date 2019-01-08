var jwt = require("jsonwebtoken");
var constants = require("../../utils/notSecret");

module.exports = (req, res) => {
  try {
    const decoded = jwt.verify(req.headers.authorization, constants.secret);
    res.end(
      JSON.stringify({
        error: false,
        msg: "Hello. auth successful"
      })
    );
  } catch (error) {
    res.end(
      JSON.stringify({
        error,
        msg: "Sorry, auth not successful"
      })
    );
  }
};
