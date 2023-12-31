const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  especialidad: { type: String, required: true },
  consultorio: { type: String, required: true },
  correo: { type: String, required: true }
});

module.exports = mongoose.model('Doctor', doctorSchema);
