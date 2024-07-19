const express = require("express");
const { main, profile, login} = require("../controller/page");
const router = express.Router();

router.get("/", main);
router.get("/login", login);
router.get("/profile", profile);

module.exports = router;
