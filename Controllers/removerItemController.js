const servicoModel = require('../Models/servicoModel');

module.exports.removerItem = async (req, res) => {

    try {

        const idItem = req.params.id;

        await servicoModel.findByIdAndDelete(idItem);

        res.redirect('/remover-item');

    } catch (error) {

        console.error("Erro ao remover item:", error.message);
        res.status(400).send("Erro ao remover item: " + error.message);

    }
}


