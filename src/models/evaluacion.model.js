const mongoose = require('mongoose');

const evaluacionSchema = new mongoose.Schema(
  {
    id_postulacion: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    comentario: {
      type: String,
    },
    id_estado: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    puntos: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

evaluacionSchema.pre('save', function (next) {
  // Puedes agregar lógica personalizada antes de guardar la evaluación aquí si es necesario.
  // Por ejemplo, puedes realizar validaciones o cálculos adicionales.
  next();
});

const Evaluacion = mongoose.model('Evaluacion', evaluacionSchema);

module.exports = Evaluacion;
