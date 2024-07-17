const express = require("express");
const db = require('./models');
const app = express();
const PORT = 8000;

app.use(express.json());

//router
const memberRouter = require("./routes/member");
app.use('/api/member', memberRouter);

//post
const postRouter = require("./routes/post");
app.use('/api/post', postRouter);

//sutdent
const studentRouter = require("./routes/student")
app.use('/api/student', studentRouter)

//404
app.use('*', (req, res)=>{
    res.status(404).send('page not found');
})

db.sequelize.sync({force : false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`http://localhost:${PORT}`);
    })
})