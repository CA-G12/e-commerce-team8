const { deleteProductQuery } = require("../../database/queries/products");
const { GenerateError } = require("../../utils/customError");

const deleteProduct = (req, res) => {
  const productId = req.params.id;
  const { user_id } = req.body;
  deleteProductQuery(user_id, productId)
    .then((data) => data.rows[0])
    .then((row) => row.id)
    .then((id) => {
      res.status(200).json({ msg: `delete product with id ${id}` });
    })
    .catch((error) => {
      GenerateError(500, error);
    });
};

module.exports = deleteProduct;
