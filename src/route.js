const express = require('express');
const routes = express.Router();
const ProdutoController = require('./controllers/ProdutoController');

routes.get("/produtos/",ProdutoController.index);
routes.get("/produto/:id",ProdutoController.show);
routes.post("/produto/store",ProdutoController.store);
routes.put("/produto/update/:id",ProdutoController.update);
routes.delete("/produto/delete/:id",ProdutoController.delete);

module.exports = routes;