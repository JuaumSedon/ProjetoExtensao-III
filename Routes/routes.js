const homeController = require('../controllers/homeController');
const {adicionarItem} = require('../controllers/adicionarItemController');
const {listarItens} = require('../controllers/listarItensController');
const { removerItem } = require('../controllers/removerItemController');
const atualizarController = require('../controllers/atualizarController');

module.exports = {
    home:(app)=>{
        app.get('/',homeController.home);
    },

    lista:(app)=>{
        app.get('/listar-itens',listarItens);
    },

    remove:(app)=>{

        app.get('/remover-item',homeController.paginaRemoverItem)
    },
    
    paginaNovoItem:(app) => {
        app.get('/novo-item', homeController.paginaNovoItem);
    },
    
    adicionarItem:(app)=>{
        app.post('/adicionar-item', adicionarItem);
    },
    removerItem:(app)=>{
        app.post('/remover-item/:id',removerItem)
    },

    atualizar:(app)=>{
        app.post('/atualizar/:id', atualizarController.atualizarItens);
    },

    carregarAtualizacao:(app)=>{
        app.get('/atualizar', homeController.paginaAtualizarItem);
    },
    
}