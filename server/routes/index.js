const express = require("express");

const router = express.Router();

const productRouter = require("./products");
const registerRouter = require("./register");

router.use(productRouter);
router.use(registerRouter);

module.exports = router;
