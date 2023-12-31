const { Sequelize, CHAR } = require('sequelize');
require('dotenv').config();

const string_conexao = process.env.CONNECTION_STRING
const sequelize = new Sequelize(string_conexao, {
  dialect: require('pg'),
  logging: false,
});

module.exports = sequelize;