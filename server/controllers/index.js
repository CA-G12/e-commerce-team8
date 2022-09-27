const { signUp, signIn, signOut } = require("./register");
const { getAllProduct, buyProduct, getCartProducts, deleteProduct, getProductById } = require("./products");

module.exports = {
  signUp,
  signIn,
  signOut,
  getAllProduct,
  deleteProduct,
  getCartProducts,
  buyProduct,
  getProductById,
};
