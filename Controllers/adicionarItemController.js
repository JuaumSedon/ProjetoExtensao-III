const servicoModel = require('../Models/servicoModel');


module.exports.adicionarItem = async (req, res) => {
    try {
        const dadosDoItem = req.body;
        const novoItem = new servicoModel(dadosDoItem);
        await novoItem.save();


        res.redirect('/');

    } catch (error) {
        console.error("Erro ao adicionar item:", error.message);
        res.status(400).send("Erro ao adicionar item: " + error.message);
    }
};