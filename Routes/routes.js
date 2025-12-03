<<<<<<< HEAD
const homeController = require('../Controllers/homeController');
const { adicionarItem } = require('../Controllers/adicionarItemController');
const { listarItens } = require('../Controllers/listarItensController');
const { removerItem } = require('../Controllers/removerItemController');
const atualizarController = require('../Controllers/atualizarController');
=======
const homeController = require('../controllers/homeController');
const {adicionarItem} = require('../controllers/adicionarItemController');
const {listarItens} = require('../controllers/listarItensController');
const { removerItem } = require('../controllers/removerItemController');
const atualizarController = require('../controllers/atualizarController');
>>>>>>> f2c7f8ae3c534214787db1bba352a374efe2c3ca

module.exports = {
    home: (app) => {
        app.get('/home', homeController.home);
    },

    lista: (app) => {
        app.get('/listar-itens', listarItens);
    },

    remove: (app) => {

        app.get('/remover-item', homeController.paginaRemoverItem)
    },

    paginaNovoItem: (app) => {
        app.get('/novo-item', homeController.paginaNovoItem);
    },

    adicionarItem: (app) => {
        app.post('/adicionar-item', adicionarItem);
    },
    removerItem: (app) => {
        app.post('/remover-item/:id', removerItem)
    },

    paginaUpdate: (app) => {
        app.get('/atualizar', homeController.paginaAtualizarItem);
    },

    atualizarItem: (app) => {
        app.post('/atualizar-item', atualizarController.editarPorNome);
    },
    
}