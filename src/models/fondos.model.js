// models/Fondo.js
const mongoose = require('mongoose');

const ganadorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  montoAsignado: { type: Number, required: true }
});

const fondoSchema = new mongoose.Schema({
  montoTotal: {
    type: Number,
    required: true,
    validate: {
      validator: function(value) {
        // Verificar que el monto total no sea cero
        return value > 0;
      },
      message: 'El monto total debe ser mayor que cero'
    }
},
  montoAsignado: {
    type: Number,
    default: 0,
    validate: {
      validator: function(value) {
        // Verificar que el monto asignado no sea mayor que el monto total
        return value <= this.montoTotal;
      },
      message: 'El monto asignado no puede ser mayor que el monto total'
    }
  },
  montoRestante: {
    type: Number,
    default: function() {
      return this.montoTotal - this.montoAsignado;
    },
    validate: {
      validator: function(value) {
        // Verificar que el monto restante no sea negativo
        return value >= 0;
      },
      message: 'El monto restante no puede ser negativo'
    }
  },

  ganadores: { type: [ganadorSchema] }
}, 

{
  versionKey: false,
});


fondoSchema.pre('save', function(next) {
  // Suma los montos asignados a los ganadores
  this.montoAsignado = this.ganadores.reduce((sum, ganador) => sum + ganador.montoAsignado, 0);
  // Actualizar el monto restante antes de guardar
  this.montoRestante = this.montoTotal - this.montoAsignado;
  next();
});

const Fondo = mongoose.model('Fondo', fondoSchema);

module.exports = Fondo;