const mongoose = require('mongoose');

const MensagemSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'O nome é obrigatório.']
    },
    email: {
        type: String,
        required: [true, 'O e-mail é obrigatório.']
    },
    mensagem: {
        type: String,
        required: [true, 'A mensagem não pode estar vazia.']
    },
    dataEnvio: {
        type: Date,
        default: Date.now 
    }
}, {
    timestamps: true 
});

module.exports = mongoose.model('mensagens', MensagemSchema);