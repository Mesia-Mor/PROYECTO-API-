// citasRoutes.js
const express = require('express');
const router = express.Router();
const citasController = require('../controllers/citasController');

// Ruta para obtener todas las citas
router.get('/', citasController.getAllCitas);

// Ruta para crear una cita
router.post('/', citasController.createCita);

// Ruta para editar una cita
router.put('/:citaId', citasController.editarCita);

// Ruta para eliminar una cita
router.delete('/:citaId', citasController.eliminarCita);

module.exports = router;
