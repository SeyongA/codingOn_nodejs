const express = require("express");
const app = express();
const PORT = 8000;

//뷰 엔진
app.set('view engine', 'ejs');
// app.set("views", './views');
app.set("views", "./quiz");


// app.use(express.urlencoded({ extended: true }));

//router

app.get('/', (req, res) => {
    res.render("form");
});

app.get('/form', (req, res) => {
    res.render('index2');
})

app.use(express.urlencoded({ extended: true }));

app.post("/postForm", (req, res)=>{
    res.render("result2", {title : "POST요청 결과", userInfo : req.body})
})


// app.get("/getForm", (req,res)=>{
//     console.log(req.query);
//     res.render("result", {title : "GET요청 결과", userInfo : req.query})
// })

//미들웨어 body-parser


// app.get('/getForm', (req, res) => {
//     console.log(req.query);
//     res.render("result", { title: "GET요청 결과", userInfo: req.query });
// })

// app.post('/postForm', (req, res) => {
//     console.log(req.body);
//     res.render("result", { title: "POST요청 결과", userInfo: req.body });
// })



// 서버 실행
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})