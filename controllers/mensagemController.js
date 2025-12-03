const mensagemModel = require('../models/mensagemModel');

module.exports.salvarMensagem = async (req, res) => {
    try {

        const novaMensagem = new mensagemModel(req.body);


        await novaMensagem.save();


        res.redirect('/fale-conosco');

    } catch (error) {
        console.error("Erro ao salvar mensagem:", error);
        res.status(500).send("Erro ao enviar mensagem: " + error.message);
    }
};

module.exports.listarMensagens = async (req, res) => {
    try {
        const mensagens = await mensagemModel.find({}).sort({ dataEnvio: -1 });
        
        res.render('mensagens.ejs', { mensagens: mensagens });

    } catch (error) {
        console.error("Erro ao listar mensagens:", error);
        res.status(500).send("Erro ao carregar mensagens.");
    }
};