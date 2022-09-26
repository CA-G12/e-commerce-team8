const { signUp, signIn } = require("./register");
const { getAllProduct, buyProduct, getCartProducts, deleteProduct} = require("./products");

module.exports = {
  signUp,
  signIn,
  getAllProduct,
  deleteProduct,
  getCartProducts,
  buyProduct
};
