// models/Item.js

const mongoose = require('mongoose');

// Um Schema vazio funciona perfeitamente para buscar dados existentes
// sem se preocupar com a estrutura deles.
const ItemSchema = new mongoose.Schema({}, { strict: false });

// O Mongoose vai procurar por uma coleção com o nome 'items' (plural, minúsculas)
module.exports = mongoose.model('items', ItemSchema);