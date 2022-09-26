const express = require('express');
const { getAllProduct, getCartProducts } = require("../controllers");
const { authenticate } = require('../middlewares');

const router = express.Router()

router.get('/products', getAllProduct)
router.get('/product/cart', authenticate, getCartProducts)
module.exports = router;