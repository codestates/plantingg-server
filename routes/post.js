const express = require("express");
const router = express.Router();

const postController = require("../controllers/post");
const checkToken = require("../middlewares/checkToken");

router.use(checkToken);

// * POST /post/read
router.get("/read", postController.read);

// * POST /post/create
router.post("/create", postController.create);

// // * POST /post/update
// router.patch("/update", postController.update);

// // * POST /post/delete
// router.delete("/delete", postController.delete);

module.exports = router;
