var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductoSchema = new Schema({
    nombre: {type: String, required: true, max: 25},
    categoria: {type: String, required: true, max: 25},
    precio: {type: String, required: true, max: 8},
    stock: {type: String, required: true, max: 8},
    tamaño: {type: String, required: true, max: 25}
});

module.exports = mongoose.model('Producto', ProductoSchema);