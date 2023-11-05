const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/ProdutoController');

router.get('/', produtoController.getAllProdutos);
router.post('/', produtoController.createProduto);
router.get('/:id', produtoController.getProdutoById);
router.put('/:id', produtoController.updateProduto);
router.delete('/:id', produtoController.deleteProduto);

module.exports = router;
