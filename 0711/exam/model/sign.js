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

exports.getsignCheck = async(userid) =>{
    const conn = await getConn();
    const query = "SELECT * FROM visitor WHERE userid = ?"
    const [row] = await conn.query(query, [userid]);
    await conn.end();
    return row;
}