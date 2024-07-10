const express = require("express");
const app = express();
const PORT = 8000;

//설정 미들웨어
app.set("view engine", 'ejs');
app.use(express.json());

//router
const userRouter = require('./rotues/user')
app.use('/user', userRouter);

//404페이지
app.use('*', (req, res)=>{
    res.render('404');
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})