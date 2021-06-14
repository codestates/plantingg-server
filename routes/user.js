const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const checkToken = require("../middlewares/checkToken");

const userController = require("../controllers/user");

router.use(checkToken);

// * GET /user/userinfo
router.get("/userinfo", userController.userInfo);

// * POST /user/profileImage
router.post("/profileImage", userController.profileImage);

// * POST /user/statusMessage
router.post("/statusMessage", userController.statusMessage);

// * PATCH /user/userEdit
router.patch("/userEdit", userController.userEdit);
=======
// const checkToken = require("./middlewares/checkToken");

const userController = require("../controllers/user");

// * POST /user/signIn
router.post("/signin", userController.signIn);

// * POST /user/signUp
router.post("/signup", userController.signUp);
>>>>>>> cad006cd92be485d42a61317223d32ad91e8dbab

module.exports = router;
