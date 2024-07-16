const { Post } = require("../models");
const { Op } = require("sequelize");

//전체글 조회
const all = async (req, res) => {
    const result = await Post.findAll({
        //attributes : 원하는 컬럼 조회
        attributes: ['id', 'title', 'content', 'createdAt'],
        //Op.lte(이하), Op.gte(이상), op.gt(초과), op.lt(미만)
        //Op.or(또는), Op.ne(같지않음), Op.in(배열요소중 하나), Op.notIn(배열요소와 모두다름)
        where: { id: { [Op.gte]: 1 } },
        order : [['id', 'desc']],
        // limit : 2,
        // offset : 1,
    });
    console.log("all", result);
    // findAll 배열로 반환   data <- 값 반환 res.data.???? 안의 값
    res.json({ result: true, data: result });
}
//글하나 생성
const write = async (req, res) => {
    //req.body.title, req.body.content
    const { title, content } = req.body;
    //insert into posts (title, content) values(title, content)
    const result = await Post.create({ title, content });
    console.log('write : ', result);
    res.json({ result: true, data: result.id })
}

const one = async (req, res) => {
    console.log(req.params.id);
    const result = await Post.findOne({ where: { id: req.params.id } });
    console.log('one : ', result);
    res.json({ result: true, data: result });
}

const updateFunc = async (req, res) => {
    const { id, title, content } = req.body;
    //update ({수정할 값}, {어떤것을});
    const result = await Post.update({ title, content }, { where: { id } });
    console.log('update : ', result);
    res.json({ result: true, data: result });
}

//글하나삭제
const deleteFunc = async (req, res) => {
    const { id } = req.body;
    const result = await Post.destroy({ where: { id } });
    console.log('delete : ', result);
    res.json({ result: true, data: result });
}

module.exports = { all, write, one, updateFunc, deleteFunc }