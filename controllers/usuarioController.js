const UsuarioModel = require('../models/usuarioModel');

module.exports.realizarCadastro = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

  
        const usuarioExistente = await UsuarioModel.findOne({ email: email });
        
        if (usuarioExistente) {

            return res.render('cadastro.ejs', { mensagemErro: 'Este e-mail já está cadastrado.' });
        }

        
        const novoUsuario = new UsuarioModel({ nome, email, senha });
        await novoUsuario.save();

        res.redirect('/');
        
    } catch (error) {
        console.error(error);
        res.render('cadastro.ejs', { mensagemErro: 'Erro ao realizar cadastro.' });
    }
};