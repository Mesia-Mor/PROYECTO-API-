const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citaSchema = new Schema({
  numeroDocumentoPaciente: { type: String, required: true },
  especialidad: { type: String, required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente', required: true }
});

module.exports = mongoose.model('Cita', citaSchema);
