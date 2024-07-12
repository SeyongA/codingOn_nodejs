const express = require("express");
const {main, user} = require("../controller/page");
const router = express.Router();

router.get('/', main);
router.get('/user', user);
// router.get('/user/:userid', user);

module.exports = router;
