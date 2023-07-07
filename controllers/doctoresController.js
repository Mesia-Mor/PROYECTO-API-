const Doctor = require('../models/doctor'); // Corrección en la ruta del modelo

// Crear doctores
exports.createDoctores = (req, res) => {
  const doctores = new Doctor(req.body);
  doctores.save()
    .then(() => res.sendStatus(201))
    .catch(error => {
      console.error('Error al guardar el doctor:', error);
      res.sendStatus(500);
    });
};

// Obtener Doctores
exports.getDoctores = (req, res) => {
  Doctor.find() // Corrección en la llamada al método find()
    .then(doctores => res.json(doctores))
    .catch(error => {
      console.error('Error al obtener los doctores:', error);
      res.sendStatus(500);
    });
};

// Editar Doctores
exports.editarDoctores = (req, res) => {
  const { doctoresId, nombre, especialidad } = req.body;

  Doctor.findByIdAndUpdate(
    doctoresId,
    {
      nombre,
      especialidad
    },
    { new: true }
  )
    .then(() => res.sendStatus(200))
    .catch(error => {
      console.error('Error al editar el doctor:', error);
      res.sendStatus(500);
    });
};

// Eliminar doctores
exports.eliminarDoctores = (req, res) => {
  const { doctoresId } = req.params;

  Doctor.findByIdAndRemove(doctoresId)
    .then(() => res.sendStatus(200))
    .catch(error => {
      console.error('Error al eliminar el doctor:', error);
      res.sendStatus(500);
    });
};
