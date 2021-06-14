const express = require("express");
const router = express.Router();

const postController = require("../controllers/post");

// * POST /post/upload
router.post("/create", postController.create);

// * POST /post/update
router.patch("/update", postController.update);

// * POST /post/delete
router.delete("/delete", postController.delete);

module.exports = router;
