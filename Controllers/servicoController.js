const servicoModel = require('../Models/servicoModel');


module.exports.listarItens = async (req, res) => {
    try {
        // 2. Usa o método .find() para buscar todos os documentos na coleção 'items'.
        const todosOsItens = await servicoModel.find({});

        // 3. Responde com os dados encontrados em formato JSON.
        //    Isso é ótimo para um teste rápido.
        res.json(todosOsItens);

    } catch (error) {
        console.error("Erro ao buscar itens:", error);
        res.status(500).send("Erro ao carregar a lista de itens.");
    }
};
