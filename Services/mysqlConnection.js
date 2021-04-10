const connectionString=require('../Access/mysqlUri');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(connectionString);
exports.sequelize=sequelize;
exports.DataTypes=Sequelize.DataTypes;