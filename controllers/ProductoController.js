var mongoose = require('mongoose');
var Producto = require("../models/Producto");

var productoController = {};

productoController.list = function(req, res) {
    Producto.find({}).exec(function(err, productos) {
        if (err) {
            console.log('Error: ', err);
            return;
        }
        console.log("The INDEX");
        res.render('../views/producto/index', {productos: productos, titulo: 'INDEX'});
    });
};

productoController.show = function(req, res) {
    Producto.findOne({_id: req.params.id}).exec(function(err, producto) {
        if ( err ) {
            console.log('Error: ', err);
            return;
        }
        res.render('../views/producto/show', {producto: producto});
    });
};

// Función para mostrar el formulario de crear un nuevo producto

productoController.create = function(req, res) {
    res.render('../views/producto/createProducto');
};

// Funcion para guardar el nuevo producto
productoController.save = function(req, res) {
    var producto = new Producto( req.body);

    producto.save(function (err) {
        if ( err) {
            console.log('Error: ', err);
            return;
        }
        console.log("Producto creado correctamente: :) ");
        res.redirect("/productos/show/"+producto._id);
    });

};

// Funcion para editar productos
productoController.edit = function(req, res) {
    Producto.findOne({_id: req.params.id}).exec(function(err, producto) {
        if ( err ) {
            console.log('Error: ', err);
            return;
        }
        res.render("../views/producto/edit", {producto: producto});
    });
};

// Funcion para agregar el nuevo valor de los productos || ACTUALIZAR

productoController.update = function(req, res) {
    Producto.findByIdAndUpdate( req.params.id, {$set: {
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        precio: req.body.precio,
        stock: req.body.stock,
        tamaño: req.body.tamaño
    }}, { new: true},
    function ( err, producto) {
        if ( err) {
            console.log('Error: ',  err);
            res.render('../views/producto/edit', {producto: req.body} );
        }

        console.log( producto );

        res.redirect('/productos/show/' + producto._id);
    });
};

// Funcion para eliminar un producto

productoController.delete = function(req, res) {
    Producto.deleteOne({_id: req.params.id}, function(err) {
        if ( err) {
            console.log('Error: ', err);
            return;
        }
        console.log("Producto Eliminado correctamente");
        res.redirect("/productos")
    })
}

module.exports = productoController;