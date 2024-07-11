const express = require("express");
const {main, visitor} = require("../controller/page");
const router = express.Router();
// const PORT = 8000;

router.get('/', main);
router.get('/visitor', visitor);
router.get('/visitor/:id', visitor);

module.exports = router;
