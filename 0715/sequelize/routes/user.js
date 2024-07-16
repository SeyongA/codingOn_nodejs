const express = require('express');
const {signup, login, info, update, deleteFunc, all} = require('../controller/user');
const router = express.Router();

//localhost:8000/api/user
//POST /signup 회원가입
router.post('/signup', signup);
//POST /login  로그인
router.post('/login', login);
//GET /info 회원정보
router.get('/info/:id', info);
//PATCH /update 회원수정
router.patch('/update', update);
//DELETE /delete 회원삭제
router.delete('/delete', deleteFunc);

//GET /all 회원전체정보
router.get('/all', all);

module.exports = router;
