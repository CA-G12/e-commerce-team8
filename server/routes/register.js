const express = require("express");
const { signUp, signIn } = require("../controllers");

const router = express.Router();

router.get("/signup", signUp);
router.post("/signin", signIn);

module.exports = router;
