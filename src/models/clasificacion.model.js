const mongoose = require("mongoose");

const clasificacionSchema = new mongoose.Schema(
  {
    id_evaluacion: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    id_postulacion: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    estado: {
      type: String,
      required: true,
      default: "En proceso",
    },
    ultima_modificacion: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);


const Clasificacion = mongoose.model("Clasificacion", clasificacionSchema);

module.exports = Clasificacion;
