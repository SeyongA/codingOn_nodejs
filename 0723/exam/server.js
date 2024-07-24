const http = require("http");
const express = require("express");
const socketIo = require("socket.io");
const app = express();
const PORT = 8000;

//http 서버
const server = http.createServer(app);

//socket 서버
const io = socketIo(server);

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render("client");
})


io.on('connection', (socket)=>{
    socket.on('msg', (arg)=>{
        console.log(arg);
        socket.emit('chat', arg)
    })
})

server.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})