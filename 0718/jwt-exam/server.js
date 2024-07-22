require('dotenv').config();
const express = require('express');
const bcrypt = require("bcrypt");
const db = require('./models');
const app = express();
const PORT = 8000;


app.set("view engine", "ejs")
app.use(express.json());

//라우터
const pageRouter = require("./routes/page");
app.use("/", pageRouter);

const memberRouter = require('./routes/member');
app.use('/api/member', memberRouter);

//404
app.use('*', (req, res) => {
    res.status(404).send('페이지를 찾을 수 없습니다');
});

db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});


//bcrypt
const saltNumber = 10;

//암호화
const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, saltNumber);
};

//비고
const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
}
