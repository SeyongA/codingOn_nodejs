const express = require("express");
const db = require('./models');
const session = require("express-session");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(session({
    secret : process.env.SESSION,
    resave : false,
    saveUninitialized : true,
}))

//router
const memberRouter = require("./routes/member");
app.use('/api/member', memberRouter);

//404
app.use('*', (req, res)=>{
    res.status(404).send('page not found');
})

db.sequelize.sync({force : false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`http://localhost:${PORT}`);
    })
})