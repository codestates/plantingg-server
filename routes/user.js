const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const checkToken = require("../middlewares/checkToken");

router.use(checkToken);

// * GET /user/userinfo
router.get("/userinfo", userController.userInfo);

// * POST /user/profileImage
router.post("/profileimage", userController.profileImage);

// * POST /user/statusMessage
router.post("/statusmessage", userController.statusMessage);

// * PATCH /user/userEdit
router.patch("/useredit", userController.userEdit);

module.exports = router;
