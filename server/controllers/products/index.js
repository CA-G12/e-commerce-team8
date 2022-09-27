const deleteProduct = require('./delete');
const buyProduct = require('./buyProduct');
const getAllProduct = require('./getAll');
const getCartProducts = require('./getCartProducts');
const getProductById = require('./getProduct')


module.exports = {
    getAllProduct,
    deleteProduct,
    buyProduct,
    getCartProducts,
    getProductById,
}
