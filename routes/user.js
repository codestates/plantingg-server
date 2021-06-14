const express = require("express");
const router = express.Router();
// const checkToken = require("./middlewares/checkToken");

const userController = require("../controllers/user");

// * POST /user/signIn
router.post("/signin", userController.signIn);

// * POST /user/signUp
router.post("/signup", userController.signUp);

module.exports = router;
