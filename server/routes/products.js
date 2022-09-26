const express = require('express');
const { getAllProduct, deleteProduct} = require("../controllers");

const router = express.Router()

router.get('/products', getAllProduct);
router.delete('/delete/:id',deleteProduct)

module.exports = router;