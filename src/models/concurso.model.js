const mongoose = require('mongoose');
const Fondo = require('./fondos.model');

const concursoSchema = new mongoose.Schema({
  montoTotalFondo: {
    type: mongoose.Schema.Types.ObjectId,  // Cambiado a mongoose.Schema.Types.ObjectId
    ref: 'Fondo',
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

    // Absorbe el monto del fondo al Concurso
    this.montoTotalFondo = fondo.montoTotal;

    // Lógica para calcular el monto a repartir según tus necesidades
    // Puedes ajustar esta lógica según tus requerimientos específicos

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
