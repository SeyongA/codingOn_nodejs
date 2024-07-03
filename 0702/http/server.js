const http = require('http'); // common
// import http from 'http' //es6

const server = http.createServer((req, res)=>{
    res.writeHead(200); //성공 
    res.write('<h1> Hello World <h1>');
    res.end('END');
})

// on() : server 객체에 이벤트를 등록
server.on("request", ()=>{
    console.log('요청 이벤트');
})

server.on("connection", ()=>{
    console.log('접속 이벤트');
})

// listen() : server를 실행

server.listen(8000, ()=>{
    console.log('http://localhost:8000');
});

