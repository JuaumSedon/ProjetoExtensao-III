const express = require('express');

const homeController = require('../controllers/homeController');
const {adicionarItem} = require('../controllers/adicionarItemController');
const {listarItens} = require('../controllers/listarItensController');
const { removerItem } = require('../controllers/removerItemController');
const atualizarController = require('../controllers/atualizarController');

module.exports = {

    login:(app)=>{

        app.get('/',homeController.login);
    },

    home: (app) => {
        app.get('/home', homeController.home);
    },

    lista: (app) => {
        app.get('/listar-itens', listarItens);
    },

    remove: (app) => {

        app.get('/remover-item', homeController.paginaRemoverItem);
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