const express = require('express');
const router = express.Router();
const pacientesController = require('../controllers/pacientesController');

// Ruta para enviar un paciente 
router.post('/', pacientesController.createPaciente);

// Ruta para obtener un paciente 

router.get('/', pacientesController.getPacientes);

// Ruta para editar un paciente
router.put('/:pacienteId', pacientesController.editarPaciente);


// Ruta para eliminar un paciente
router.delete('/:pacienteId', pacientesController.eliminarPaciente);

module.exports = router;
