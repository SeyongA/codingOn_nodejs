const express = require("express");
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');


//임시 DB
const comments = [
    {
        id: 1,
        userid: 'hello',
        date: '2024-07-01',
        comment: '안녕하세요'
    }, {
        id: 2,
        userid: 'happy',
        date: '2024-08-12',
        comment: '반갑습니다'
    }, {
        id: 3,
        userid: 'lucky',
        date: '2024-02-12',
        comment: '행복하세요'
    }, {
        id: 4,
        userid: 'fail',
        date: '2024-07-08',
        comment: '망해따'
    }
]

//router
app.get('/', (req, res) => {
    res.render("index");
})

app.get('/comments', (req,res)=>{
    res.render("comments", { list:comments})
})

app.get("/comments/:id", (req, res)=>{
    console.log(req.params);  // key: value
    console.log(req.params.id); // value
    console.log(typeof req.params.id);
    const id = Number(req.params.id);

    //comments 배열의 요소에 접근.
    res.render('comment', {data: comments[id-1]});
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})