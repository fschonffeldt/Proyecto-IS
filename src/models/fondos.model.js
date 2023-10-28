// models/Fondo.js
const mongoose = require('mongoose');

const fondoSchema = new mongoose.Schema({
  montoTotal: {
    type: Number,
    required: true,
  },
  montoAsignado: {
    type: Number,
    default: 0,
  },
  montoRestante: {
    type: Number,
    default: function() {
      return this.montoTotal - this.montoAsignado;
    },
  },
}, {
  versionKey: false,
});

const Fondo = mongoose.model('Fondo', fondoSchema);

module.exports = Fondo;
