const homeModel = require('../Models/homeModel')
const homeController = require('../Controllers/homeController')
const servicoController = require('../Controllers/servicoController')



module.exports = {
    home:(app)=>{

        app.get('/',homeController.home);
        
    },

    lista:(app)=>{

        app.get('/listar-itens',servicoController.listarItens);
    }


}