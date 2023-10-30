const mongoose = require('mongoose');

const evaluacionSchema = new mongoose.Schema(
  {
    id_postulacion: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    comentario: {
      type: String,
      default: "",
    },
    id_estado: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    puntos: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

evaluacionSchema.pre('save', function (next) {
  if (this.puntos < 0 || this.puntos > 100) {
    // Verifica si los puntos están en un rango válido
    return next(new Error('Los puntos deben estar entre 0 y 100'));
  }
  next();
});

const Evaluacion = mongoose.model('Evaluacion', evaluacionSchema);

module.exports = Evaluacion;
