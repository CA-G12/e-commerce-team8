const { deleteProductQuery } = require("../../database/queries/products");

const deleteProduct = (req, res, next) => {
  const productId = req.params.id;
  const userId = req.data.id;

  deleteProductQuery(userId, productId)
    .then((data) => {
      res.status(200).json({ message: "product deleted successfully" });
    })
    .catch((error) => {
      next(error);
    });
};

module.exports = deleteProduct;
