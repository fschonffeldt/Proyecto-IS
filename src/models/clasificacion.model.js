const mongoose = require("mongoose");
const ESTADO = require("../constants/estado.constants"); // Asegúrate de importar tus constantes de estados

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
      type: mongoose.Schema.Types.ObjectId,
      ref: "estado",
      default: "6554daba504a326972fe5419", // Reemplaza con el ID del estado predeterminado
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

clasificacionSchema.pre('save', function(next) {
  // Puedes agregar lógica personalizada antes de guardar el estado aquí si es necesario.
  next();
});

const Clasificacion = mongoose.model("Clasificacion", clasificacionSchema);

module.exports = Clasificacion;
