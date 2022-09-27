const {
    buyProductQuery,
    deleteProductQuery,
    getAllProductsQuery,
    getCartProductsQuery,
    getProductQuery,
} = require('./products');

const {
    signUpQuery,
    checkEmailQuery
} = require('./register')


module.exports = {
    buyProductQuery,
    deleteProductQuery,
    getAllProductsQuery,
    getCartProductsQuery,
    signUpQuery,
    checkEmailQuery,
    getProductQuery,
}   
