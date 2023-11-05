const Compra = require('../models/Compra');
const compraService = require('../services/CompraService');

async function getAllCompras(req, res) {
  try {
    const compras = await compraService.getAllCompras();
    return res.status(200).json(compras);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function createCompra(req, res) {
  const { data, produtos } = req.body;
  try {
    const compra = await compraService.createCompra(data);

    if (produtos && produtos.length > 0) {
      await compraService.addProdutosToCompra(compra.id, produtos);
    }

    return res.status(201).json(compra);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getCompraById(req, res) {
  const { id } = req.params;
  try {
    const compra = await compraService.getCompraById(id);
    if (!compra) {
      return res.status(404).json({ message: 'Compra não encontrada' });
    }
    return res.status(200).json(compra);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function deleteCompra(req, res) {
  const { id } = req.params;
  try {
    await compraService.deleteCompra(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function updateCompra(req, res) {
  const { id } = req.params;
  const { data } = req.body;
  try {
    const compra = await compraService.updateCompra(id, data);
    return res.status(200).json(compra);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllCompras,
  createCompra,
  getCompraById,
  deleteCompra,
  updateCompra,
};
