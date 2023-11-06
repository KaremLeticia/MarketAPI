const Produto = require('../models/Produto');
const produtoService = require('../services/ProdutoService');

async function getAllProdutos(req, res) {
  try {
    const produtos = await produtoService.getAllProdutos();
    return res.status(200).json(produtos);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function createProduto(req, res) {
  const { nome, preco } = req.body;
  try {
    const produto = await produtoService.createProduto(nome, preco);
    return res.status(201).json(produto);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getProdutoById(req, res) {
  const { id } = req.params;
  try {
    const produto = await produtoService.getProdutoById(id);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    return res.status(200).json(produto);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function deleteProduto(req, res) {
  const { id } = req.params;
  try {
    await produtoService.deleteProduto(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function updateProduto(req, res) {
  const { id } = req.params;
  const { nome, preco } = req.body;
  try {
    const produto = await produtoService.updateProduto(id, nome, preco);
    return res.status(200).json(produto);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllProdutos,
  createProduto,
  getProdutoById,
  deleteProduto,
  updateProduto,
};
