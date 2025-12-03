const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  
    nome: {
        type: String,
        required: [true, 'O nome do item é obrigatório.'] 
    },
    descricao: {
        type: String,
        default: '' 
    },
    preco: {
        type: Number,
        required: [true, 'O preço é obrigatório.'],
        min: [0, 'O preço não pode ser negativo.'] 
    },
    emEstoque: {
        type: Boolean,
        default: true
    },
    dataCriacao: {
        type: Date,
        default: Date.now 
    }
}, {

    strict: true,
    timestamps: true 
});


module.exports = mongoose.model('items', ItemSchema);