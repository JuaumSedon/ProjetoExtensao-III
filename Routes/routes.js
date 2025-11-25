const homeController = require('../Controllers/homeController');
const {adicionarItem} = require('../Controllers/adicionarItemController');
const {listarItens} = require('../Controllers/listarItensController');
const { removerItem } = require('../Controllers/removerItemController');


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
    }
    
}