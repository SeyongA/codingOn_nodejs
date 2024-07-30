const express = require("express");
const db = require("./models")
const app = express();
const PORT = 8000;

app.use(express.json());

//셋팅
app.set("view engine", 'ejs');


//페이지
const pageRouter = require('./routes/page');
app.use('/', pageRouter);

//라우터
const book = require('./routes/book');
app.use('/api/book', book);

//404
app.use('*', (req, res)=>{
    res.render('404');
})
db.sequelize.sync({force : false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`http://localhost:${PORT}`);
    })
})