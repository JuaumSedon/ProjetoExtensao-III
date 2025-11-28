const servicoModel = require('../Models/servicoModel');

module.exports.atualizarItens = async (req, res) => {
    try {
        const itemId = req.params.id; 
        const novosDados = req.body; 

        const itemAtualizado = await servicoModel.findByIdAndUpdate(
            itemId,
            novosDados,
            { new: true, runValidators: true }
        );

        if (!itemAtualizado) {
            return res.status(404).json({ mensagem: 'Item ou Serviço não encontrado.' });
        }
        
        res.status(200).json(itemAtualizado);
        
    } catch (erro) {

        if (erro.name === 'ValidationError') {
            console.error("Erro de Validação ao atualizar item:", erro.message);
            return res.status(400).json({ 
                mensagem: 'Dados inválidos para a atualização.', 
                detalhes: erro.message 
            });
        }
        
        console.error("Erro interno do servidor ao atualizar item:", erro);
        return res.status(500).json({ mensagem: 'Erro interno no servidor ao tentar atualizar o item.' });
    }
};

