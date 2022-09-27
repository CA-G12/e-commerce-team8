const express = require("express");
const { signUp, signIn, signOut } = require("../controllers");
const { authenticate } = require("../middlewares")

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/signout", authenticate, signOut)

module.exports = router;
