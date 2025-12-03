const mongoose = require('mongoose');


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

let isConnected = false; // Cache da conexão // Problema do vercel

const conexaoBD = async () => {
    
    if (isConnected) {
        return;
    }
    if (!process.env.MONGO_URI) {
        console.error("❌ ERRO FATAL: A variável MONGO_URI não foi encontrada.");
        console.error("Verifique se o arquivo .env existe e se o nome está correto.");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000
        });

        isConnected = db.connections[0].readyState;
        console.log("✅ Conectado ao MongoDB com sucesso!");
        
    } catch (error) {
        console.error("❌ Erro ao conectar no MongoDB:", error);
        throw error;
    }
}

module.exports = conexaoBD;