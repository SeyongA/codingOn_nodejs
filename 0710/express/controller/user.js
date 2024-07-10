const userModel = require("../model/user");

exports.main = (req, res) =>{
    res.render('index', {users : userModel})
};

exports.register = (req, res)=>{
    console.log(req.body);
    const {name, gender, major} = req.body;
    userModel.push({
        id : userModel.lenght + 1,
        name,
        gender,
        major,
    });
    res.json({result: true});
};