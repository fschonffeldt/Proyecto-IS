const mongoose = require("mongoose");

const evaluacionSchema = new mongoose.Schema(
  {
    // ... tus campos existentes ...
    montoGanado: {
      type: Number,
      default: 0, // Valor por defecto si no se especifica monto ganado
    },
    esGanador: {
      type: Boolean,
      default: false, // Valor por defecto si no se especifica si es ganador
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Evaluacion = mongoose.model("Evaluacion", evaluacionSchema);

module.exports = Evaluacion;

// Función para obtener monto y número de ganadores
async function obtenerGanadores() {
  const ganadores = await Evaluacion.find({ esGanador: true });
  const montoTotal = ganadores.reduce((sum, ganador) => sum + ganador.montoGanado, 0);
  const numeroDeGanadores = ganadores.length;

  return {
    montoTotal,
    numeroDeGanadores,
  };
}