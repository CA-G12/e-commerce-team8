const connection = require("../../config/connection");

const getAllProductsQuery = () => connection.query("SELECT * FROM products");

module.exports = getAllProductsQuery;
