"use strict";

const mongoose = require("mongoose");

const postulacionesSchema = new mongoose.Schema(
    {
    numeroSolicitud: {
    type: String,
    unique: true, // Garantiza que el número de solicitud sea único
  },
    nombreRepresentante: {
        type: String,
        required: true,
    },
    ApelidoRepresentante: {
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
    emeailInstitucion: {
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


    },
    {
        versionKey: false,
    },
    
    
);

const Postulaciones = mongoose.model("Formulario", postulacionesSchema);
module.exports = Postulaciones;
