const mongoose = require("mongoose");

const estadoSchema = new mongoose.Schema(
  {
    id_postulacion: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    estado: {
      type: String,
      required: true,
      enum: ["en proceso", "aceptado", "rechazado"], // Enumeración de estados válidos
      default: "en proceso", // Valor predeterminado
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

estadoSchema.pre('save', function(next) {
  // Puedes agregar lógica personalizada antes de guardar el estado aquí si es necesario.
  next();
});

const Estado = mongoose.model("Estado", estadoSchema);

module.exports = Estado;
