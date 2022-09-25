const {
     buyProductQuery,
     deleteProductQuery,
     getAllProductsQuery,
      getCartProductsQuery
    } = require('./products');

const {
    signInQuery,
    signUpQuery,
    checkEmailQuery
   } = require('./register')    


module.exports = {
    buyProductQuery,
    deleteProductQuery,
    getAllProductsQuery,
    getCartProductsQuery,
    signInQuery,
    signUpQuery,
    checkEmailQuery
}   
