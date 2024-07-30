require('dotenv').config();
const { BookList, RentalHistory, User } = require('../models');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const find = await User.findOne({ where: { email } });
        if (find) {
            res.json({ result: false, message: '이미존재하는회원' });
        } else {
            const pass = await bcrypt.hash(password, 10);
            const result = await User.create({ userName, email, password : pass });
            res.json({ result: true, response: result })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
}

exports.login = async (req, res) => {
    try {
        const {id, email, password } = req.body;
        const find = await User.findOne({ where: { email } })
        if (find) {
            console.log(find);
            const pass = await bcrypt.compare(password, find.password)
            if (pass) {
                // console.log("===================\n",find);
                const token = jwt.sign({id, userName: find.userName, email: find.email }, process.env.SECRET, { expiresIn: '24h' });
                // console.log(token);
                const response = {
                    token,
                }
                res.json({ result: true, response, code: 100, message: "로그인 성공" });
            } else {
                res.json({ result: false, response: null, code: 100, message: "비밀번호가 일치하지않습니다." })
            }
        }
    } catch (error) {
        res.status(500).json({ result: false, response: null, code: 1001, message: '존재하지 않는 아이디' });
    }
}

exports.addBook = async (req, res) => {
    try {
        const { bookName, author, date } = req.body;
        const result = await BookList.create({ bookName, author, date });
        res.json({ result: true, response: result, message: "책을 추가했음" })
    } catch (error) {
        res.status(500).json({ result: false, message: '서버오류' });
    }
}

exports.getBk = async (req, res) => {
    try {
        const { bookName } = req.body;
        const find = await BookList.findOne({ where: { bookName } });
        if (find) {
            // console.log("=================");
            // console.log(find);
            // console.log("=================");
            const response = {
                bookName: find.bookName,
                author: find.author,
                find: find.date,
            }
            res.json({ result: true, response })
        }
    } catch (error) {
        res.status(500).json({ result: false, response: null, message: '존재하지 않는 책입니다' });
    }
}

exports.find = async (req, res) => {
    try {
        console.log("=================");
        console.log(req);
        console.log("=================");

        const { id } = req.userInfo;
        const result = await Member.findByPk(id, {
            attributes: ['userName', 'email'],
            //include: 쿼리를 실행할때 관련된 모델의 데이터도 함께 조회할 수 있도록하는 옵션
        });
        console.log('find', result);
        res.json({ result: true, response: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
};
