const { User } = require('../models');

//회원가입
const signup = async (req, res) => {
    console.log('요청값:', req.body);
    const { userid, name, pw } = req.body;
    const result = await User.create({ userid, name, pw });
    res.json({ result: true });
};
//로그인
const login = async (req, res) => {
    const { userid, pw } = req.body;
    const result = await User.findOne({where : {userid, pw}});
    if (result !== null) {
        res.json({ result: true, message: '로그인 성공', id: result.id });
    } else {
        res.json({ result: false, message: '로그인 실패', id: null });
    }
};
//회원정보 한명 조회
const info = async (req, res) => {
    const result = await User.findOne({where : {id : req.params.id}});
    if (result !== null) {
        res.json({ result: true, message: '조회완료', info : result});
    } else {
        res.json({ result: false, message: '존재하는 회원없음', info : null });
    }
};
//회원정보 수정
const update = async (req, res) => {
    const { id, name, pw } = req.body;
    const result = await User.update({name, pw},{where :{id}});
    res.json({ result: true });
};
//회원정보 삭제
const deleteFunc = async (req, res) => {
    const result = await User.destroy({where : {id : req.body.id}});
    res.json({ result: true });
};
//회원 전체 정보
const all = async (req, res) => {
    const result = await User.findAll({
        attributes : ['id', 'name', 'userid'],
    });
    console.log(result);
    res.json({ result });
};

module.exports = { signup, login, info, update, deleteFunc, all };
