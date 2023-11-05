const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Produto extends Model {}

Produto.init({
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Produto',
});

module.exports = Produto;