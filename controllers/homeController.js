
//Nao precisa de Model , serve apenas para renderizar uma View.

const servicoModel = require('../models/servicoModel')
const UsuarioModel = require('../models/usuarioModel')


module.exports.faleconoscoPagina = (req,res)=>{

    try {

        res.render('faleconosco.ejs')
        
    } catch (error) {

        res.status(500).send("Erro ao carregar");
        
    }
};



module.exports.login = (req,res)=>{
    try {
      
        res.render('login.ejs', { mensagemErro: null }); 
    } catch (error) {
        res.status(500).send("Erro ao carregar login");
    }
};


module.exports.autenticar = async (req, res) => {
    const { email, senha } = req.body;

    try {
        // 1. Verifica ADMIN (Fixo no código)
        if (email === 'admin@email.com' && senha === 'admin123') {
            return res.redirect('/home');
        }

        // 2. Verifica USUÁRIO COMUM (No Banco de Dados)
        const usuarioComum = await UsuarioModel.findOne({ email: email, senha: senha });

        if (usuarioComum) {
            return res.redirect('/intro');
        }

        // 3. Se falhar
        res.render('login.ejs', { mensagemErro: 'E-mail ou senha incorretos.' });

    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao tentar logar.");
    }
};

module.exports.paginaCadastro = (req, res) => {
    res.render('cadastro.ejs', { mensagemErro: null });
};

module.exports.paginaIntro = (req, res) => {
    try {
        res.render('intro.ejs');
    } catch (error) {
        res.status(500).send("Erro ao carregar página de introdução.");
    }
};

module.exports.home = (req, res) => {

    try {

        res.render('home.ejs');

    } catch (error) {


        res.status(500).send("Erro ao carregar Home");

    }


};



module.exports.paginaNovoItem = (req, res) => {
    try {
        res.render('novo-item.ejs');
    } catch (error) {
        res.status(500).send("Erro ao carregar página de formulário.");
    }
};


module.exports.paginaRemoverItem = async(req, res) => {

    try {
        const todosOsItens = await servicoModel.find({});

        res.render('remover-item.ejs',{itens: todosOsItens});
    } catch (error) {
        res.status(500).send("Erro ao carregar página de remoção.");
    }

}



module.exports.paginaAtualizarItem = async (req, res) => {
    try {
      
        const nomeItem = req.query.nome;
        
        let itemParaEditar;

        if (nomeItem) {
            itemParaEditar = await servicoModel.findOne({ nome: nomeItem });
        }

        if (!itemParaEditar) {
            itemParaEditar = {
                _id: "",
                nome: "",
                descricao: "", 
                preco: "",
                emEstoque: true
            };
        }
        res.render('atualizar.ejs', { item: itemParaEditar });

    } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao carregar página: " + error);
    } 
};