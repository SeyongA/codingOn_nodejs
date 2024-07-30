const { DataTypes } = require("sequelize");

const bookList = (seq) =>{
    return seq.define('bookList',{
        bookName : {
            type : DataTypes.STRING(31),
            allowNull : false,
            unique : true,
        }, 
        author : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true,
        },
        date : {
            type : DataTypes.DATE,
            allowNull : false,
        }
    });
}

module.exports = bookList;
