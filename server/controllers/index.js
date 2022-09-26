const { signUp, signIn } = require("./register");
const { getAllProduct, buyProduct, getCartProducts } = require("./products");

module.exports = {
  signUp,
  signIn,
  getCartProducts,
  getAllProduct,
  buyProduct
};
