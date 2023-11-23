const { fondoBodySchema, fondoIdSchema } = require('../schema/fondos.schema.js');
const mongoose = require('mongoose');
const Joi = require('joi');

const fondoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  montoTotal: {
    type: Number,
    required: true
  }
}, {
  versionKey: false
});
const Fondo = mongoose.model('Fondo', fondoSchema);

fondoSchema.pre('save', function(next) {
  // Suma los montos asignados a los ganadores
  this.montoAsignado = this.ganadores.reduce((sum, ganador) => sum + ganador.montoAsignado, 0);
  // Actualizar el monto restante antes de guardar
  this.montoRestante = this.montoTotal - this.montoAsignado;
  next();
});


module.exports = Fondo;
