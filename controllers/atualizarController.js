const servicoModel = require('../models/servicoModel');

module.exports.editarPorNome = async (req, res) => {
    try {

        const { nome, descricao, preco } = req.body;

        const itemAtualizado = await servicoModel.findOneAndUpdate(
            { nome: nome }, 
            { descricao: descricao, preco: preco } 
        );


        if (!itemAtualizado) {
        
            return res.status(404).send("Erro: Não encontrei nenhum item com o nome: " + nome);
        }

        res.redirect('/listar-itens');

    } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao atualizar o item: " + error);
    }
};