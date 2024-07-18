const express = require("express");
const cookieParse = require("cookie-parser");
const app = express();
const PORT = 8000;

//미들웨어, 설정
app.set("view engine", "ejs");
app.use(express.json());
//쿠키
app.use(cookieParse('my-secret'));

const cookieConfig = {
    /**
     * httpOnly : 웹서버를 통해서만 쿠키에 접근가능
     * => javascript에서 document.cookie를 이용해서 쿠키에 접근하는것을 차단
     * maxAge : 쿠키의 수명
     * expires : 만료날짜를 GMT 시간으로 설정
     * path : 해당 디렉토리와 하위 디렉토리에서만 경로가 활성화되고 웹 브라우저는
     *       해당하는 쿠키만 웹서버에 전송. 쿠키가 전송될 url 지정
     * domain : 쿠키가 전송될 도메인을 지정.
     * secure : https로 통신하는 경우만 쿠키를 전송.
     * signed : 쿠키의 암호화 결정. 쿠키가 서명되어 클라이어트가 쿠키를 수정하는 것을 방지.
     */
    httpOnly : true,
    maxAge : 60 * 1000, //1분 
    signed : true
}

//라우터
app.get('/', (req, res) =>{
    res.render("index");
})

app.get('/setCookie', (req, res)=>{
    res.cookie("myCookie", "가나다라마바사", cookieConfig)
    res.send("쿠키 생성하기");
})

app.get('/getCookie', (req, res)=>{
    // 쿠키값 가져오기
    // res.send(req.cookies);
    // 암호화된 쿠키값
    res.send(req.signedCookies);
})

app.get("/clearCookie", (req, res)=>{
    res.clearCookie("myCookie");
    res.send("쿠키삭제");
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})