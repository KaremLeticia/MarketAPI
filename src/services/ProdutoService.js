const Produto = require('../models/Produto');

async function getAllProdutos() {
  return Produto.findAll();
}

async function createProduto(nome, preco) {
  return Produto.create({ nome, preco });
}

async function getProdutoById(id) {
  return Produto.findByPk(id);
}

async function deleteProduto(id) {
  const produto = await Produto.findByPk(id);
  if (produto) {
    await produto.destroy();
  }
}

async function updateProduto(id, nome, preco) {
  const produto = await Produto.findByPk(id);
  if (produto) {
    produto.nome = nome;
    produto.preco = preco;
    await produto.save();
  }
  return produto;
}

module.exports = {
  getAllProdutos,
  createProduto,
  getProdutoById,
  deleteProduto,
  updateProduto,
};
