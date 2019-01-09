var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  try {
    const decoded = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
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
