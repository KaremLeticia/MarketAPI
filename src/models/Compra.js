const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');
const Produto = require('./Produto');

class Compra extends Model {}

Compra.init({
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Compra',
});

Compra.belongsToMany(Produto, { through: 'CompraProduto', as: 'produtos'});

module.exports = Compra;