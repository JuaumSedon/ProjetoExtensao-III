const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const conexaoBD = async() =>{


    try {

        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado ao banco");
        
    } catch (error) {

        console.log("Erro ao conectar ao banco de dados ", error);
        
    }
}


module.exports = conexaoBD;

