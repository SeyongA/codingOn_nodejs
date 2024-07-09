const express = require('express');
const multer = require('multer');
const path = require("path");
const app = express();
const PORT = 8000;

// view engine
app.set('view engine', 'ejs');

// 정적파일 세팅
app.use('/uploads', express.static(__dirname + '/uploads'));

//multer설정
const storage = multer.diskStorage({
    // 파일이 저장될 경로
    destination: (req, file, done) => {
        done(null, 'uploads/')
    },
    //파일 이름 (중복 방지)
    filename: (req, file, cb) => {
        //확장자 추출
        const ext = path.extname(file.originalname);
        //파일 이름 추출
        const newName = path.basename(file.originalname, ext) + Date.now() + ext;
        cb(null, newName);
    }
});

// 파일 용량제한
const limits = {
    fileSize: 1024 * 1024 * 5, // 5mb 제한
};

const upload = multer({ storage, limits }); //파일명이 같으면 생략가능 storage : storage, limits : limits

//router
// === 페이지
app.get('/', (req, res) => {
    res.render('index');
})

//=====요청, 응답 데이터
app.post('/upload', upload.single('userfile'), (req, res) => {
    console.log('file', req.file);
    console.log('data', req.body);
    const {id, pw, username, age} = req.body;
    res.json({filename : req.file.path, id, pw, username, age})
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})