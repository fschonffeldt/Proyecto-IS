const mongoose = require('mongoose');

const proyecSchema = new mongoose.Schema({
    Tema: {
      type: String
    },
    Descripcion: {
      type: String
    },
    Monto: {
      type: Number
    },
    Bases: {
      type: String
    },
    fechaCreac: {
      type: Date
    },
}, { collection: 'proyectos',  versionKey: false, timestamps: true,});

const Proyecto = mongoose.model('Proyecto', proyecSchema);

module.exports = Proyecto;