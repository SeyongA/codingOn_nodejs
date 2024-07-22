require('dotenv').config();
const express = require('express');
const db = require('./models');
const app = express();
const PORT = 8000;
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

app.set('view engine', 'ejs');
console.log(process.env.BUCKET);

//aws설정
aws.config.update({
    accessKeyId: process.env.ACCESS,
    secretAccessKey: process.env.SECRET,
    region: 'ap-northeast-2',
});
//aws s3인스터스 생성
const s3 = new aws.S3();
//multer설정
const upload = multer({
    storage: multerS3({
        s3, //s3: s3
        bucket: process.env.BUCKET,
        acl: 'public-read', //파일접근권한(public-read로 해야 업로드된 파일이 공개)
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '-' + file.originalname);
        },
    }),
});

//라우터
const router = require('./routes');
app.use('/', router);
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/upload', upload.array('files'), (req, res) => {
    console.log(req.files);
    res.send(req.files);
});

db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
