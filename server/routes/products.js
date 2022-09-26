const express = require('express');
const { authenticate } = require('../middlewares');
const { getAllProduct, buyProduct } = require('../controllers');

const router = express.Router()

router.get('/product/buy/:productID', authenticate, buyProduct)



router.get('/products', getAllProduct)

module.exports = router;