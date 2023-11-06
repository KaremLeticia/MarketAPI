const express = require('express');
const router = express.Router();
const compraController = require('../controllers/CompraController');

router.get('/', compraController.getAllCompras);
router.post('/', compraController.createCompra);
router.get('/:id', compraController.getCompraById);
router.put('/:id', compraController.updateCompra);
router.delete('/:id', compraController.deleteCompra);

module.exports = router;