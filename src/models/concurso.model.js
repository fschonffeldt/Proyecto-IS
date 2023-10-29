// models/Concurso.js
const mongoose = require('mongoose');
const Fondo = require('./fondos.model'); 

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
// Middleware pre-save para copiar el montoTotal a Fondo
concursoSchema.pre('save', async function(next) {
  try {
    // Obtén el documento Fondo relacionado
    const fondo = await Fondo.findById(this.fondo);
    // Actualiza el montoTotal en Fondo
    fondo.montoTotal = this.montoTotal;
    // Guarda el documento Fondo actualizado
    await fondo.save();
    // Continúa con el proceso de guardado
    next();
  } catch (error) {
    next(error);  // Pasa el error al manejador de errores
  }
});
const Concurso = mongoose.model('Concurso', concursoSchema);

module.exports = Concurso;
