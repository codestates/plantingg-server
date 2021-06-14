const express = require("express");
const router = express.Router();

const postController = require("../controllers/post");

// * POST /post/upload
router.post("/create", postController.create);

// * POST /post/update
router.post("/update", postController.update);

// * POST /post/delete
router.post("/delete", postController.delete);

module.exports = router;
