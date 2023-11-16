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


const Evaluacion = mongoose.model('Evaluacion', evaluacionSchema);

module.exports = Evaluacion;
