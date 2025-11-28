const servicoModel = require('../Models/servicoModel');

module.exports.atualizarItens = async (req, res) => {
    try {
        const itemId = req.params.id; 
        let novosDados = req.body; 

        // TRATAMENTO DO CHECKBOX (emEstoque):
        // Se o checkbox foi marcado, o valor é 'on'; caso contrário, ele não existe no body.
        if (novosDados.emEstoque === 'on') {
            novosDados.emEstoque = true;
        } else {
            // Se não foi enviado, estava desmarcado
            novosDados.emEstoque = false;
        }
        
        const itemAtualizado = await ServicoModel.findByIdAndUpdate(
            itemId,
            novosDados,
            { new: true, runValidators: true }
        );

        if (!itemAtualizado) {
             return res.status(404).render('erro.ejs', { message: 'Item de Serviço não encontrado para atualização.' });
        }
        
        // AÇÃO DE SUCESSO: Redireciona o usuário para a lista após a alteração
        return res.redirect('/listar-itens'); 
        
    } catch (erro) {

        if (erro.name === 'ValidationError') {
            console.error("Erro de Validação ao atualizar item:", erro.message);
            // Em caso de erro de validação, informa o usuário
            return res.status(400).send('Erro de Validação! Verifique se Nome e Preço estão preenchidos.');
        }
        
        console.error("Erro interno do servidor ao atualizar item:", erro);
        return res.status(500).send('Erro interno ao tentar atualizar o item.');
    }
};

