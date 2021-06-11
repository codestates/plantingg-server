const express = require("express");
const router = express.Router();

const signIn = require("../controllers/user/signIn");
const signUp = require("../controllers/user/signUp");

// * POST /user/signIn
router.post("/signin", signIn.post);

// * POST /user/signUp
router.post("/signup", signUp.post);

module.exports = router;
