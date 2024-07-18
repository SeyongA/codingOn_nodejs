'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Member = require("./member")(sequelize);
db.Profile = require("./profile")(sequelize);
// 1:1
db.Member.hasOne(db.Profile, {foreignKey : 'memberId', onDelete : "CASCADE"});
db.Profile.belongsTo(db.Member, {foreignKey : 'memberId', onDelete : "CASCADE"});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
