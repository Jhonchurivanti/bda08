var mongoose = require('mongoose');
var Empleado = require('../models/Empleado');

var empleadoController = {};

empleadoController.list = function(req, res) {
    Empleado.find({}).exec(function(err, empleados) {
        if (err) {
            console.log('Error: ', err);
            return;
        }
        console.log("The INDEX");
        res.render('../views/empleado/index', {empleados: empleados, titulo: 'INDEX'});
    });
};

empleadoController.show = function(req, res) {
    Empleado.findOne({_id: req.params.id}).exec(function(err, empleado) {
        if ( err ) {
            console.log('Error: ', err);
            return;
        }
        res.render('../views/empleado/show', {empleado: empleado});
    });
};

// Función para mostrar el formulario de crear un nuevo empleado

empleadoController.create = function(req, res) {
    res.render('../views/empleado/createEmpleado');
};

// Funcion para guardar el nuevo empleado
empleadoController.save = function(req, res) {
    var empleado = new Empleado( req.body);

    empleado.save(function (err) {
        if ( err) {
            console.log('Error: ', err);
            return;
        }
        console.log("Empleado creado correctamente: :) ");
        res.redirect("/empleados/show/"+empleado._id);
    });

};

// Funcion para editar empleados
empleadoController.edit = function(req, res) {
    Empleado.findOne({_id: req.params.id}).exec(function(err, empleado) {
        if ( err ) {
            console.log('Error: ', err);
            return;
        }
        res.render("../views/empleado/edit", {empleado: empleado});
    });
};

// Funcion para agregar las nuevas informaciones de los empleados || ACTUALIZAR

empleadoController.update = function(req, res) {
    Empleado.findByIdAndUpdate( req.params.id, {$set: {
        nombres: req.body.nombres,
        ape_paterno: req.body.ape_paterno,
        ape_materno: req.body.ape_materno,
        sexo: req.body.sexo,
        dni: req.body.dni,
        celular: req.body.celular,
        email: req.body.email
    }}, { new: true},
    function ( err, empleado) {
        if ( err) {
            console.log('Error: ',  err);
            res.render('../views/empleado/edit', {empleado: req.body} );
        }

        console.log( empleado );

        res.redirect('/empleados/show/' + empleado._id);
    });
};

// Funcion para eliminar un empleado
empleadoController.delete = function(req, res) {
    Empleado.deleteOne({_id: req.params.id}, function(err) {
        if ( err) {
            console.log('Error: ', err);
            return;
        }
        console.log("Producto Eliminado correctamente");
        res.redirect("/empleados")
    })
}

module.exports = empleadoController;