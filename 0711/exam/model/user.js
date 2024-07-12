require('dotenv').config();
const mysql = require('mysql2/promise');
//mysql연결
const getConn = async () => {
    return await mysql.createConnection({
        host: process.env.HOST,
        user: process.env.MYUSER,
        password: process.env.PASS,
        database: process.env.DATA,
    });
};

const allUser = async () => {
    const conn = await getConn(); //mysql접속
    const query = 'SELECT * FROM createid';
    const [row] = await conn.query(query);
    console.log('model', row);
    await conn.end();
    return row;
};


module.exports = {allUser}