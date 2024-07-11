const express = require("express");
const controller = require("../controller/sign")
const router = express.Router();


router.get("/", controller.signCheck);



module.exports = router;
