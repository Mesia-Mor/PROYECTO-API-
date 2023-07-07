const Paciente = require('../models/paciente');

// crear pacientes 
exports.createPaciente = (req, res) => {
  const paciente = new Paciente(req.body);
  paciente.save()
    .then(() => res.sendStatus(201))
    .catch(error => {
      console.error('Error al guardar el paciente:', error);
      res.sendStatus(500);
    });
};

//obtener pacientes 
exports.getPacientes = (req, res) => {
  Paciente.find()
    .then(pacientes => res.json(pacientes))
    .catch(error => {
      console.error('Error al obtener los pacientes:', error);
      res.sendStatus(500);
    });
};

//editar pacientes 
exports.editarPaciente = (req, res) => {
  const { pacienteId, nombre, edad, direccion } = req.body;

  Paciente.findByIdAndUpdate(
    pacienteId,
    {
      nombre,
      edad,
      direccion
    },
    { new: true }
  )
    .then(() => res.sendStatus(200))
    .catch(error => {
      console.error('Error al editar el paciente:', error);
      res.sendStatus(500);
    });
};

//Eliminar pacientes 
exports.eliminarPaciente = (req, res) => {
  const { pacienteId } = req.params;

  Paciente.findByIdAndRemove(pacienteId)
    .then(() => res.sendStatus(200))
    .catch(error => {
      console.error('Error al eliminar el paciente:', error);
      res.sendStatus(500);
    });
};
