const express = require("express");
const { signUp, login, addBook, getBk, rental, userInfo, find } = require("../controller/book");
const router = express.Router();
const {auth} = require('../middleware');

//signup
router.post('/sign', signUp);
router.post('/login', login)

//책 추가 
router.post('/addbook', addBook);
router.get('/getBk',auth, getBk)
router.get('/find', auth, find)


module.exports = router;


