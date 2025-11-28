
//Nao precisa de Model , serve apenas para renderizar uma View.

const servicoModel = require('../Models/servicoModel')

module.exports.home = (req, res) => {

    try {

        res.render('public/home.ejs');

    } catch (error) {


        res.status(500).send("Erro ao carregar Home");

    }


};



module.exports.paginaNovoItem = (req, res) => {
    try {
        res.render('public/novo-item.ejs');
    } catch (error) {
        res.status(500).send("Erro ao carregar página de formulário.");
    }
};


module.exports.paginaRemoverItem = async(req, res) => {

    try {
        const todosOsItens = await servicoModel.find({});

        res.render('public/remover-item.ejs',{itens: todosOsItens});
    } catch (error) {
        res.status(500).send("Erro ao carregar página de remoção.");
    }

}

module.exports.paginaAtualizarItem = async (req, res) => {
    try {
        const itemId = req.params.id; 
        
        // Busca o item e passa-o como 'item' (singular)
        const itemEncontrado = await ServicoModel.findById(itemId); 

        if (!itemEncontrado) {
            return res.status(404).render('erro.ejs', { message: 'Item de Serviço não encontrado para edição.' });
        }

        // Renderiza a View EJS
        res.render('public/atualizar.ejs', { item: itemEncontrado }); 
        
    } catch (erro) {
        console.error("Erro ao carregar formulário de edição:", erro);
        res.status(500).render('erro.ejs', { message: 'Erro interno ao carregar a página de edição. (Verifique o ID)' });
    }
};