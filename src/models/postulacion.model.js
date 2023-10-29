"use strict";
const mongoose = require("mongoose");
const postulacionesSchema = new mongoose.Schema({
  numeroSolicitud: {
    type: String,
    unique: true,
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
    type: mongoose.Schema.Types.ObjectId,
    ref: "region",
   },
  ciudad: { // Corregido el nombre del campo
    type: mongoose.Schema.Types.ObjectId,
    ref: "ciudad", // Corregido el nombre del modelo
  },
 estado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "estado",
  },
  
},
   
{
  versionKey: false,
});

const Postulaciones = mongoose.model("Postulaciones", postulacionesSchema);
module.exports = Postulaciones;
