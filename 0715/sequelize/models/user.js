const { DataTypes } = require("sequelize");
const user = (seq) =>{
    return seq.define('user', {
        id: {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true,
        },
        userid : {
            type : DataTypes.STRING(30),
            allowNull : false,
        },
        name : {
            type : DataTypes.STRING(30),
            allowNull : false,
        },
        pw : {
            type : DataTypes.STRING(30),
            allowNull : false,
        }
    }) 
}

module.exports = user;