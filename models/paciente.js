const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pacienteSchema = new Schema({
  nombre: { type: String, required: true },
  cedula: { type: String, required: true, unique: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true },
  telefono: { type: String, required: true }
});

module.exports = mongoose.model('Paciente', pacienteSchema);
