const servicoModel = require('../models/servicoModel');

module.exports.listarItens = async (req, res) => {
    try {

        const todosOsItens = await servicoModel.find({});
        
        res.render('lista.ejs',{itens:todosOsItens});

    } catch (error) {
        console.error("Erro ao buscar itens:", error);
        res.status(500).send("Erro ao carregar a lista de itens.");
    }
};