const mongoose = require('mongoose');
require("../models/produto");
const Produto = mongoose.model('Produto');

//params = post/put/delete
//query = get

module.exports = {
    async index(req,res) {
        const {page = 1} = req.query;
        const produtos = await Produto.paginate({},{page,limit:10});
        return res.json(produtos);
    },

    async store(req,res) {
        const produto = await Produto.create(req.body);
        return res.json(produto);
    },

    async show(req, res) {
        const produto = await Produto.findById(req.params.id);
        return res.json(produto);
    },

    async update(req,res) {
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.json(produto);
    },

    async delete(req,res) {
        await Produto.findByIdAndDelete(req.params.id);
        return res.send('Removido com sucesso');
    }
};