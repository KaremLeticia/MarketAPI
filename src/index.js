const express = require('express');
const sequelize = require('./database');
const produtoRoutes = require('./routes/ProdutoRoutes');
const compraRoutes = require('./routes/CompraRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/produtos', produtoRoutes);
app.use('/compras', compraRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
});

module.exports = app;