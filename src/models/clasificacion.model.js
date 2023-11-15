const mongoose = require("mongoose");

const clasificacionSchema = new mongoose.Schema(
  {
    id_postulacion: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    estado: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "estado",
      },
    ],
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
