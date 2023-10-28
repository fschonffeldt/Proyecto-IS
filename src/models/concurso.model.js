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
  fondo: fondoSchema,  // Embebido de fondoSchema
}, {
  versionKey: false,
});

const Concurso = mongoose.model('Concurso', concursoSchema);

module.exports = Concurso;
