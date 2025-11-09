const routes = require('./Routes/routes');
const express = require('express');


const app = express();

app.set("view engine", "ejs");
app.set("views", "./Views");
app.use(express.static('./public'))


app.use(express.json()); // Essencial para o app.post() ler o req.body em JSON
app.use(express.urlencoded({extended:true})); // Essencial para ler dados de formulários HTML


routes.home(app);
routes.lista(app);
routes.remove(app);
routes.paginaNovoItem(app);
routes.adicionarItem(app);


app.use((req,res,next)=>{

    res.status(404).render('erro.ejs',{message:'Pagina nao encontrada'});
    
})


module.exports = app