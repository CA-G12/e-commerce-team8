const connection = require("../../config/connection");

const buyProductQuery = (userID, productID) => connection
    .query('NSERT INTO cart (user_id, product_id) values ($1, $2);', [userID, productID]);

module.exports = buyProductQuery;