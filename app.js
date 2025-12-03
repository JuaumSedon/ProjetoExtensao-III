const express = require('express');
const routes = require('./Routes/routes');
const path = require('path');
const dbConn = require('./Config/dbConn'); 

const app = express();

dbConn();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes.home(app);
routes.login(app);
routes.intro(app);
routes.faleconosco(app);
routes.mensagens(app);
routes.cadastro(app);
routes.lista(app);
routes.remove(app);
routes.paginaNovoItem(app);
routes.adicionarItem(app);
routes.removerItem(app);
routes.paginaUpdate(app);
routes.atualizarItem(app);

app.use((req, res, next) => {
    res.status(404).render('erro.ejs', { message: 'Página não encontrada' });
});

module.exports = app;