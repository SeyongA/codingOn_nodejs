const { DataTypes } = require("sequelize");

const user = (seq) =>{
    return seq.define('user',{
        userName : {
            type : DataTypes.STRING(31),
            allowNull : false,
            unique : true,
        }, 
        email : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true,
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false,
        }
    });
}

module.exports = user;
