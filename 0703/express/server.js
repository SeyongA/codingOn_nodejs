const express = require('express');
const app = express();
const PORT = 8000;

// 뷰 템플릿
app.set('view engine', 'ejs');
app.set('views', 'views'); // 샹략가능

//정적파일 세팅
app.use('/public', express.static(__dirname + '/public'));

// 시간값 출력
// app.use((req, res, next) => {
//     console.log("Time", Date.now());
//     next();
// });


// 라우터
// "/"는 http://localhost:8000
app.get('/', (req, res) => {
    res.send({ name: "KDT" });

})

app.get('/kdt', (req, res) => {
    //render은 view 템플릿 랜더링, 템플릿 이름과 랜더링 이름 동일해야함
    res.render("test", { age: 20 });
})

// 'gugu' http://localhost:8000/gugu
app.get('/gugu', (req, res) => {
    res.render("gugudan", { dan: 2, leng: [1, 2, 3, 4, 5, 6, 7, 8, 9] });
})

app.get('/fruit', (req, res) => {
    res.render("fruit", {
        fruit: [
            { name: 'apple', kor: "사과" },
            { name: 'banana', kor: "바나나" },
            { name: 'grape', kor: "포도" },
            { name: 'peach', kor: "복숭아" },
        ],
    });
});

// app.get('/form', (req, res)=>{
//     res.render("form")
// })

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})