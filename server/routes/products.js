const express = require("express");
const { authenticate } = require("../middlewares");
const {
  getAllProduct,
  buyProduct,
  getCartProducts,
  deleteProduct,
} = require("../controllers");

const router = express.Router();

router.get("/product/buy/:productID", authenticate, buyProduct);
router.get("/products", getAllProduct);
router.get("/product/cart", authenticate, getCartProducts);
router.delete("/product/delete/:id", authenticate, deleteProduct);

module.exports = router;
