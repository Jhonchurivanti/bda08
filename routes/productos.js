var express = require('express');
var router = express.Router();

var productos = require('../controllers/ProductoController.js');

// Mostrar la lista de productos
router.get('/', productos.list);
router.get('/show/:id', productos.show);

// Mostrar el formulario para crear un nuevo productos
router.get('/createProducto', productos.create);

// Para guardar el nuevo producto ingresado
router.post('/save', productos.save);

// Para editar el producto ingresado
router.get('/edit/:id', productos.edit);

// Para guardar y actualizar el producto
router.post('/update/:id', productos.update);

// Para eliminar el producto
router.post('/delete/:id', productos.delete);





module.exports = router;