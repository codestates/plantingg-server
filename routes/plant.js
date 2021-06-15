const express = require("express");
const plant = require("../controllers/plant");
const router = express.Router();

const plantController = require("../controllers/plant");
const checkToken = require("../middlewares/checkToken");

router.use(checkToken);

// * POST /post/read
router.get("/read", plantController.read);

// * POST /post/create
router.post("/create", plantController.create);

// * POST /post/update
router.patch("/update", plantController.update);

// * POST /post/delete
router.delete("/delete", plantController.delete);

module.exports = router;
