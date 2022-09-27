const connection = require("../../config/connection");

const getProductQuery = ({ id }) => connection
    .query('SELECT id, title, price, imgurl, category, description FROM products WHERE id = $1', [id]);

module.exports = getProductQuery;