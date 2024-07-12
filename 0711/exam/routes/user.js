const express = require("express");
const controller = require("../controller/user");
const router = express.Router();

router.post("/", controller.allUser);

module.exports = router;