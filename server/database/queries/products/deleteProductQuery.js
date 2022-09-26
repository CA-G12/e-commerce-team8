const connection = require("../../config/connection");

const deleteProductQuery = (UserId, productId) =>
  connection.query(
    "delete from cart where user_id= $1 and product_id=$2 returning id;",
    [UserId, productId]
  );

module.exports = deleteProductQuery;
