
//Nao precisa de Model , serve apenas para renderizar uma View.

const servicoModel = require('../models/servicoModel')

module.exports.home = (req, res) => {

    try {

        res.render('home.ejs');

    } catch (error) {


        res.status(500).send("Erro ao carregar Home");

    }


};



module.exports.paginaNovoItem = (req, res) => {
    try {
        res.render('novo-item.ejs');
    } catch (error) {
        res.status(500).send("Erro ao carregar página de formulário.");
    }
};


module.exports.paginaRemoverItem = async(req, res) => {

    try {
        const todosOsItens = await servicoModel.find({});

        res.render('remover-item.ejs',{itens: todosOsItens});
    } catch (error) {
        res.status(500).send("Erro ao carregar página de remoção.");
    }

}

// No arquivo homeController.js

module.exports.paginaAtualizarItem = (req, res) => {
    try {
        // Criamos um objeto vazio ou com valores padrão
        const itemVazio = {
            _id: "",        // ID vazio pois não selecionamos nada
            nome: "",       // Campo vazio
            descricao: "", 
            preco: "" 
        };

        // Renderizamos enviando esse item vazio
        res.render('public/atualizar.ejs', { item: itemVazio });

<<<<<<< HEAD:Controllers/homeController.js
    } catch (error) {
        res.status(500).send("Erro ao carregar página: " + error);
=======
        // Renderiza a View EJS
        res.render('atualizar.ejs', { item: itemEncontrado }); 
        
    } catch (erro) {
        console.error("Erro ao carregar formulário de edição:", erro);
        res.status(500).render('erro.ejs', { message: 'Erro interno ao carregar a página de edição. (Verifique o ID)' });
>>>>>>> f2c7f8ae3c534214787db1bba352a374efe2c3ca:controllers/homeController.js
    }
};