const { DataTypes } = require("sequelize");

const userModel = (seq) => {
    const user =  seq.define(
        "user_mvc",
        {
            id : {
                type : DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement : true,
            }, userid:{
                type : DataTypes.STRING(20),
                allowNull : false,
            }, name : {
                type : DataTypes.STRING(10),
                allowNull : false
            }, pw : {
                type : DataTypes.STRING(20),
                allowNull : false
            },
        },
        {
            tableName : "user_mvc",
            freezeTableName : true,
            timestamps : false,
        }
    );
    return user;
}

module.exports = userModel;

