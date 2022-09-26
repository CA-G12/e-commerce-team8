const express = require('express');
const { signUp } = require('../controllers');


const router = express.Router()

router.get('/signup', signUp)

module.exports = router;