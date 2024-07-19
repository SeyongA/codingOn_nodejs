const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) =>{
    const header = req.headers.authorization;
    if (!header) {
        return res.status(401).json({result : false});
    }
    const [__, token] = header.split(" ");
    if(__ === "Bearer"){
        //jwt 인증
        jwt.verify(token, process.env.SECRET, (err, decode) =>{
            if(err){
                return res.status(403).json({result : false});
            }
            req.userInfo = decode; // 다음 미들웨어로 전달하는 값
            next(); 
        })
    } else{
        return res.status(401).json({result : false});
    } 
}