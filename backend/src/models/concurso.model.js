const mongoose = require('mongoose');
const Fondo = require('./fondos.model');

const concursoSchema = new mongoose.Schema({
  nombreConcurso: {
    type: String,
    required: true,
  },
  montoTotalFondo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fondo', // modelo para el esquema de Fondo
    required: true,
  },
  montoARepartir: {
    type: Number,
    required: true,
  },
}, {
  versionKey: false,
});


// Middleware pre-save para absorber el monto de un fondo según su ID
concursoSchema.pre('save', async function(next) {
  try {
    // Obtén el documento Fondo relacionado
    const fondo = await Fondo.findById(this.montoTotalFondo);
    if (!fondo) throw new Error('Fondo no encontrado');

    // Absorbe el ID del fondo al Concurso
    this.montoTotalFondo = fondo._id;  // Ajusta esto según tus necesidades


    // Descuenta el monto a repartir del monto total del fondo
    fondo.montoTotal -= this.montoARepartir;

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