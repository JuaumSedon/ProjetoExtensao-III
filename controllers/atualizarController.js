const servicoModel = require('../models/servicoModel');

module.exports.editarPorNome = async (req, res) => {
    try {
        // 1. Pegamos os dados que vieram do formulário
        const { nome, descricao, preco } = req.body;

        // 2. O Mongoose busca pelo "nome" e atualiza a "descricao" e "preco"
        // Estrutura: findOneAndUpdate(filtro, novosDados)
        const itemAtualizado = await servicoModel.findOneAndUpdate(
            { nome: nome }, // FILTRO: Procura onde o nome é igual ao digitado
            { descricao: descricao, preco: preco } // DADOS: O que será mudado
        );

        // 3. Verificamos se deu certo
        if (!itemAtualizado) {
            // Se não achou nenhum item com esse nome
            return res.status(404).send("Erro: Não encontrei nenhum item com o nome: " + nome);
        }

        // 4. Se deu certo, volta para a lista
        res.redirect('/listar-itens');

    } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao atualizar o item: " + error);
    }
};