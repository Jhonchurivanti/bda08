var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EmpleadoSchema = new Schema({
    nombres: {type: String, required: true, max: 80},
    ape_paterno: {type: String, required: true, max: 80},
    ape_materno: {type: String, required: true, max: 80},
    sexo: {type: String, required: true, max: 10},
    dni: {type: String, required: true, max: 8},
    celular: {type: String, required: true, max: 9},
    email: {type: String, required: true, max: 8}
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);