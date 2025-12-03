const express = require('express');
const routes = require('./Routes/routes');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes.home(app);
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