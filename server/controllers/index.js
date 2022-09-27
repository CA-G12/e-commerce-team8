const { signUp, signIn, signOut } = require("./register");
const { getAllProduct, buyProduct, getCartProducts, deleteProduct } = require("./products");

module.exports = {
  signUp,
  signIn,
  signOut,
  getAllProduct,
  deleteProduct,
  getCartProducts,
  buyProduct
};
