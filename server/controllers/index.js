const { signUp, signIn } = require("./register");
const { getAllProduct , deleteProduct} = require("./products");

module.exports = {
  signUp,
  signIn,
  getAllProduct,deleteProduct,
};
