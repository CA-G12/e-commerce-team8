const express = require('express');
const { authenticate } = require('../middlewares')
const { buyProduct } = require('../controllers/products')

const router = express.Router()

router.get('/product/buy/:productID', authenticate, buyProduct)

module.exports = router;