const  deleteProduct  = require('./delete');
const buyProduct = require('./buyProduct');
const getAllProduct = require('./getAll');
const getCartProducts = require("./getCartProducts");


module.exports = {
    getAllProduct,
    deleteProduct,
    buyProduct,
    getCartProducts,
}
