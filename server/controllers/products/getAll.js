const { getAllProductsQuery } = require("../../database/queries");
const { GenerateError } = require("../../utils/customError");

const getAllProduct = (_, res) => {
  getAllProductsQuery()
    .then((data) => data.rows)
    .then((products) => {res.json(products)})
    .catch((err) => {
      GenerateError(500, err);
    });
};

module.exports = getAllProduct;
