const mongoose = require("mongoose");

const evaluacionSchema = new mongoose.Schema(
  {
    id_formulario: {
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
    timestamps: true, // Agregar timestamps para fecha de creación y modificación
  }
);

const Evaluacion = mongoose.model("Evaluacion", evaluacionSchema);

module.exports = Evaluacion;
