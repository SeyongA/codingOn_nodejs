const { DataTypes } = require("sequelize");

const rentalHistory = (seq) =>{
    return seq.define('rentalHistory',{
        ratalName : {
            type : DataTypes.STRING,
            references : {
                model : 'users',
                key : 'userName',
            }
        }, 
        rentalBook : {
            type : DataTypes.STRING,
            references : {
                model : 'bookLists',
                key : 'bookName',
            }
        },
        rentalDate : {
            type : DataTypes.DATE,
        },
        returnDate : {
            type : DataTypes.DATE,
        }
    });
}

module.exports = rentalHistory;
