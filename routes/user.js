const express = require("express");
const router = express.Router();
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

module.exports = router;
