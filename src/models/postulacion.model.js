"use strict";
const mongoose = require("mongoose");
const postulacionesSchema = new mongoose.Schema({
  concurso: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "concurso",
  },
  nombreRepresentante: {
    type: String,
    required: true,
  },
  ApellidoRepresentante: {
    type: String,
    required: true,
  },
  rutRepresentante: {
    type: String,
    required: true,
  },
  telefonoRepresentante: {
    type: String,
    required: true,
  },
  emailRepresentante: {
    type: String,
    required: true,
  },
  nombreInstitucion: {
    type: String,
    required: true,
  },
  rutInstitucion: {
    type: String,
    required: true,
  },
  emailInstitucion: { // Corregido el nombre del campo
    type: String,
    required: true,
  },
  direccionInstitucion: {
    type: String,
    required: true,
  },
  FechaPostulacion: {
    type: Date,
    default: Date.now,
  },
  region: {
    type: String,
    ref: "region",
  },
  ciudad: { // Corregido el nombre del campo
    type: String,
    ref: "ciudad", // Corregido el nombre del modelo
  },
  estados: {
    type: String,
    enum: ["borrador", "enviada"], // Definimos dos estados posibles
    default: "borrador", // Por defecto, se guarda como borrador
  },
},

{
  versionKey: false,
});

const Postulaciones = mongoose.model("Postulaciones", postulacionesSchema);
module.exports = Postulaciones;
