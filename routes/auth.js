const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");

// * POST /user/signIn
router.post("/signin", authController.signIn);

// * POST /user/signUp
router.post("/signup", authController.signUp);

module.exports = router;
