const signModel = require('../model/visitor');

exports.getsignCheck = async(req, res)=>{
    const data = await signModel.getsignCheck(req.parmas.id);
    res.json({result : data});
}