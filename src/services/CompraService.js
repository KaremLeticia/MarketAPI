const Compra = require('../models/Compra');
const Produto = require('../models/Produto');

async function getAllCompras() {
  return Compra.findAll({
    include: {
      model: Produto,
      as: 'produtos',
      through: { attributes: [] },
    },
  });
}

async function createCompra(data) {
  return Compra.create({ data });
}

async function addProdutosToCompra(compraId, produtos) {
  const compra = await Compra.findByPk(compraId);
  
  if (!compra) {
    throw new Error('Compra não encontrada');
  }

  await Promise.all(
    produtos.map(async (produtoId) => {
      const produto = await Produto.findByPk(produtoId);
      if (produto) {
        await compra.addProduto(produto);
      }
    })
  );
}

async function getCompraById(id) {
  return Compra.findByPk(id);
}

async function deleteCompra(id) {
  const compra = await Compra.findByPk(id);
  if (compra) {
    await compra.destroy();
  }
}

async function updateCompra(id, data) {
  const compra = await Compra.findByPk(id);
  if (compra) {
    compra.data = data;
    await compra.save();
  }
  return compra;
}

module.exports = {
  getAllCompras,
  createCompra,
  addProdutosToCompra,
  getCompraById,
  deleteCompra,
  updateCompra,
};