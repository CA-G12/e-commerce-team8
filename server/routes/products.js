const express = require('express');
const { getAllProduct } = require("../controllers");

const router = express.Router()

router.get('/products', getAllProduct)

module.exports = router;