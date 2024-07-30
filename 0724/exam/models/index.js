'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

db.User = require("./user")(sequelize);
db.BookList = require("./bookList")(sequelize);
db.RentalHistory = require("./rentalHistory")(sequelize);

// 유저와 대여기록의 1:다 
db.User.hasMany(db.RentalHistory, {foreignKey : "rentalName", onDelete : "CASCADE"});
db.RentalHistory.belongsTo(db.User, {foreignKey : "rentalName", onDelete : "CASCADE"});

// 책목록과 대여기록의 1:다
db.BookList.hasMany(db.RentalHistory, {foreignKey : "rentalBook", onDelete : "CASCADE"});
db.RentalHistory.belongsTo(db.BookList, {foreignKey : "rentalBook", onDelete : "CASCADE"});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
