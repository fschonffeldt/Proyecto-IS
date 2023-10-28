// models/Concurso.js
const mongoose = require('mongoose');
const fondoSchema = require('./fondos.model');

const concursoSchema = new mongoose.Schema({
  montoTotal: {
    type: Number,
    required: true,
  },
  numeroDeGanadores: {
    type: Number,
    required: true,
  },
  fechaTerminoPostulacion: {
    type: Date,
    required: true,
  },
  fechaResultadosPostulacion: {
    type: Date,
    required: true,
  },
 fondo: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Fondo',  // Asumiendo que 'Fondo' es el nombre del modelo para el esquema de Fondo
  required: true
}
}, {
versionKey: false,
});

const Concurso = mongoose.model('Concurso', concursoSchema);

module.exports = Concurso;
