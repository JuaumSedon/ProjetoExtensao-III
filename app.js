const routes = require('./Routes/routes');
const express = require('express');


const app = express();

app.set("view engine", "ejs");
app.set("views", "./Views");
app.use(express.static('./public'))


app.use(express.json());
app.use(express.urlencoded({extended:true}));


routes.home(app);
routes.lista(app);


app.use((req,res,next)=>{

    res.status(404).render('erro.ejs',{message:'Pagina nao encontrada'});
    
})


module.exports = app


