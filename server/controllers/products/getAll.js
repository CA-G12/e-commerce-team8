const { getAllProductsQuery } = require("../../database/queries");
const { GenerateError } = require("../../utils/customError");
const { verifyToken } = require("../../utils/tokenPromise");

const getAllProduct = (req, res) => {
  const { token } = req.cookies;
  let user;
  verifyToken(token)
    .then((result) => {
      user = result.username;
    })
    .catch(() => {
      user = null;
    });
  getAllProductsQuery()
    .then((data) => data.rows)
    .then((products) => {
      res.json({ user, products });
    })
    .catch((err) => {
      GenerateError(500, err);
    });
};

module.exports = getAllProduct;
