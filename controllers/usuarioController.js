const UsuarioModel = require('../models/usuarioModel');

module.exports.realizarCadastro = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        // Verifica se o usuário já existe
        const usuarioExistente = await UsuarioModel.findOne({ email: email });
        
        if (usuarioExistente) {
            // Se já existe, volta para o cadastro com erro
            return res.render('cadastro.ejs', { mensagemErro: 'Este e-mail já está cadastrado.' });
        }

        // Cria o novo usuário
        const novoUsuario = new UsuarioModel({ nome, email, senha });
        await novoUsuario.save();

        // Redireciona para o login após sucesso
        res.redirect('/');
        
    } catch (error) {
        console.error(error);
        res.render('cadastro.ejs', { mensagemErro: 'Erro ao realizar cadastro.' });
    }
};