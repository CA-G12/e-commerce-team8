const connection = require("../../config/connection");

const getCartProductsQuery = ({ userId })=> connection
    .query(`
        SELECT products.*, users.*, cart.product_id FROM users 
        JOIN cart ON cart.user_id = users.id 
        JOIN products ON cart.product_id = products.id 
        WHERE users.id = ($1);
    `,[userId] )

module.exports = getCartProductsQuery;