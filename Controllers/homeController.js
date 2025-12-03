
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

    } catch (error) {
        res.status(500).send("Erro ao carregar página: " + error);
    }
};