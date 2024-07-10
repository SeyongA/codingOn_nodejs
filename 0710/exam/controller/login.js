const loginModel = require("../model/login");
// const {id, pw} = require("../model/login");

exports.main = (req, res) => {
    res.render('index');
}

exports.get = (req, res) => {
    res.render('get');
}

exports.post = (req, res) => {
    res.render('post');
}

exports.resultGet = (req, res) => {
    console.log('요청값', req.query);
    res.json({response: req.query });
}

exports.resultPost = (req, res) => {
    console.log('요청값', req.body);
    const { id: reqId, pw: reqPw } = req.body;
    if (loginModel[0].userId === reqId && loginModel[0].userPw === reqPw) {
        res.json({ result: true, userId: loginModel[0].userId });
    } else {
        res.json({ result: false, userId: null });
    }
}