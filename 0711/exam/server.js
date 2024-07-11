const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());

const signRouter = require("./routes/sign");
app.use('/', signRouter);


app.use("*", (req, res)=>{
    res.render('404');
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})