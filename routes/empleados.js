var express = require('express');
var router = express.Router();

var empleados = require('../controllers/EmpleadoController.js');

// Mostrar la lista de empleados
router.get('/', empleados.list);
router.get('/show/:id', empleados.show);

// Mostrar el formulario para crear un nuevo empleados
router.get('/createEmpleado', empleados.create);

// Para guardar el nuevo empleado ingresado
router.post('/save', empleados.save);

// Para editar el empeado ingresado
router.get('/edit/:id', empleados.edit);

// Para guardar y actualizar el empleado
router.post('/update/:id', empleados.update);

// Para eliminar el empleado
router.post('/delete/:id', empleados.delete);





module.exports = router;