var jwt = require("jsonwebtoken");
var Sequelize = require("sequelize");

var sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    logging: console.log,
    maxConcurrentQueries: 100,
    dialect: "postgres",
    dialectOptions: {
      ssl: "Amazon RDS"
    },
    pool: { maxConnections: 5, maxIdleTime: 30 },
    language: "en"
  }
);

module.exports = (req, res) => {
  try {
    const decoded = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );

    sequelize
      .authenticate()
      .then(() => {
        res.end(
          JSON.stringify({
            error: false,
            msg: `Hello. auth successful and db!!!!`
          })
        );
      })
      .catch(err => {
        res.end(
          JSON.stringify({
            msg: `Hello. auth successful but no db`,
            ...err
          })
        );
      });
  } catch (error) {
    res.end(
      JSON.stringify({
        error,
        msg: "Sorry, auth not successful"
      })
    );
  }
};
