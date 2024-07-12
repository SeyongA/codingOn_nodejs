const userModel = require('../model/user');

const allUser = async (req, res) => {
    const data = await userModel.allUser();
    console.log('cont', data);
    res.json({ result: data });
};

module.exports = {allUser};