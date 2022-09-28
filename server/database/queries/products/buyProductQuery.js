const connection = require("../../config/connection");

const buyProductQuery = ({ productID, id }) => connection
    .query('INSERT INTO cart (user_id, product_id) values ($1, $2) RETURNING id;', [id, productID]);

module.exports = buyProductQuery;