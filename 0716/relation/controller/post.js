const { Post, Comment } = require("../models");

exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const result = await Post.create({ title, content });
        res.json({ result: true, response: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
}

exports.createComment = async (req, res) => {
    try {
        const { comment, postId } = req.body;
        const result = await Comment.create({ comment, postId });
        res.json({ result: true, response: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
}

exports.all = async (req, res) => {
    try {
        const result = await Post.findAll({
            attributes: ['title', 'id'],
        });
        res.json({ result: true, response: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }

}

//하나 조회
exports.getPost = async (req, res) => {
    try {
        const { id } = req.params
        const result = await Post.findByPk(id, {
            attributes: ['title', 'content'],
            include: [{ model: Comment }]
        })
        res.json({ result: true, response: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
}

exports.update = async (req, res) => {
    try {
        const { content, title, id, comment } = req.body;
        const find = await Post.findByPk({ id });
        if (find) {
            await Post.update({ content }, { where: { title } });
            await Comment.update({ comment }, { where: { postId : id } });
            res.json({ result: true, response: result });
        } else {
            res.json({ result: false, response: null, message: "없음" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
}