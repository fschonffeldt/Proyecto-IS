// models/Concurso.js
const mongoose = require('mongoose');
const Fondo = require('./fondos.model'); 

const ganadorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  montoAsignado: {
    type: Number,
    required: true,
  },
});

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
    validate: {
      validator: function(value) {
        // Obtén la fecha actual
        const now = new Date();
        // Calcula la diferencia en meses
        const diff = (value.getFullYear() * 12 + value.getMonth()) - (now.getFullYear() * 12 + now.getMonth());
        // Verifica que la diferencia esté dentro del rango permitido (0 a 2 meses)
        return diff >= 0 && diff <= 2;
      },
      message: 'La fecha de término de postulación debe ser dentro de los próximos 2 meses'
    }
  },
  fechaResultadosPostulacion: {
    type: Date,
    required: true,
    validate: [{
      validator: function(value) {
        const hoy = new Date();
        const cuatroMesesDespues = new Date(hoy.setMonth(hoy.getMonth() + 4));
        return value <= cuatroMesesDespues && value >= this.fechaTerminoPostulacion;
      },
      message: props => props.value < this.fechaTerminoPostulacion
        ? 'La fecha de resultados de postulación no puede ser anterior a la fecha de término de postulación'
        : 'La fecha de resultados de postulación debe ser dentro de los próximos 4 meses'
    }]
  },
  fondo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fondo',  // Asumiendo que 'Fondo' es el nombre del modelo para el esquema de Fondo
    required: true,
  },
}, {
  versionKey: false,
});


// Middleware pre-save para copiar datos de Fondo a Concurso
concursoSchema.pre('save', async function(next) {
  try {
    // Obtén el documento Fondo relacionado
    const fondo = await Fondo.findById(this.fondo);
    if (!fondo) throw new Error('Fondo no encontrado');

    // Copia los datos del Fondo al Concurso
    this.montoTotal = fondo.montoTotal;
    this.ganadores = fondo.ganadores;
    this.montoAsignado = fondo.montoAsignado;  // Asume que tienes un campo montoAsignado en Concurso
    this.montoRestante = fondo.montoRestante;  // Asume que tienes un campo montoRestante en Concurso

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
