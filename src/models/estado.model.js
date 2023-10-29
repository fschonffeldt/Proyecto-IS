const mongoose = require("mongoose");
const estadosValidos = ["en proceso", "aceptado", "rechazado"];

const estadoSchema = new mongoose.Schema(
  {
    id_evaluacion: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    id_solicitud: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    estado: {
      type: String,
      required: true,
      enum: estadosValidos, // Usa "enum" para restringir las opciones
    },
    ultima_modificacion: {
      type: Date, // Utiliza el tipo 'Date' para almacenar fechas y horas
      default: Date.now, // Establece la fecha de creación como valor predeterminado
    },
  },
  {
    versionKey: false,
  }
);

const Estado = mongoose.model("Estado", estadoSchema);

module.exports = Estado;
