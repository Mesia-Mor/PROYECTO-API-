const express = require('express');
const router = express.Router();
const doctoresController = require('../controllers/doctoresController');

// Ruta para enviar un doctor
router.post('/', doctoresController.createDoctores);

// Ruta para obtener un doctor
router.get('/', doctoresController.getDoctores);

module.exports = router;

// Ruta para editar un doctor
router.put('/:doctoresId', doctoresController.editarDoctores);

// Ruta para eliminar un doctor
router.delete('/:doctoresId', doctoresController.eliminarDoctores);

module.exports = router;
