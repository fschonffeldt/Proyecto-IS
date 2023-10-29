"use strict";

const { v4: uuidv4 } = require("uuid");
const moment = require("moment");
const Postulacion = require("../models/postulacion.model");
const Ciudad = require("../models/ciudad.model");
const Region = require("../models/region.model");
const { handleError } = require("../utils/errorHandler");

async function createPostulacion(postulacionData) {
  try {
    // Generar una fecha de postulación con Moment.js
    postulacionData.FechaPostulacion = moment().format();

    // Generar un número de solicitud único con UUID
    postulacionData.numeroSolicitud = uuidv4();

    const ciudad = await Ciudad.findById(postulacionData.ciudad);
    if (!ciudad) {
      throw new Error("La ciudad especificada no existe en la base de datos.");
    }
    const region = await Region.findById(postulacionData.region);
    if (!region) {
      throw new Error("La región especificada no existe en la base de datos.");
    }
    const postulacion = await Postulacion.create(postulacionData);
    return postulacion;
  } catch (error) {
    handleError(error, "postulacion.service -> createPostulacion");
    throw new Error("Error al crear la postulación: " + error.message);
  }
}

async function getPostulacionesByRut(rutRepresentante) {
  try {
    const postulaciones = await Postulacion.find({ rutRepresentante });
    return postulaciones;
  } catch (error) {
    handleError(error, "postulacion.service -> getPostulacionesByRut");
    throw new Error("Error al obtener las postulaciones: " + error.message);
  }
}

async function getPostulacionByNumeroSolicitud(numeroSolicitud) {
  try {
    const postulacion = await Postulacion.findOne({ numeroSolicitud });
    if (!postulacion) {
      throw new Error("Postulación no encontrada");
    }
    return postulacion;
  } catch (error) {
    handleError(error, "postulacion.service -> getPostulacionByNumeroSolicitud");
    throw new Error("Error al obtener la postulación: " + error.message);
  }
}

async function visualizarEstadoSolicitud(numeroSolicitud) {
  try {
    const postulacion = await Postulacion.findOne({ numeroSolicitud });
    if (!postulacion) {
      throw new Error("Postulación no encontrada");
    }
    return postulacion.estado;
  } catch (error) {
    handleError(error, "postulacion.service -> visualizarEstadoSolicitud");
    throw new Error("Error al visualizar el estado de la solicitud: " + error.message);
  }
}

async function updatePostulacion(numeroSolicitud, newData) {
  try {
    const postulacion = await Postulacion.findOne({ numeroSolicitud });
    if (!postulacion) {
      throw new Error("Postulación no encontrada");
    }

    if (newData.ciudad) {
      const ciudad = await Ciudad.findById(newData.ciudad);
      if (!ciudad) {
        throw new Error("La ciudad especificada no existe en la base de datos.");
      }
    }

    if (newData.region) {
      const region = await Region.findById(newData.region);
      if (!region) {
        throw new Error("La región especificada no existe en la base de datos.");
      }
    }

    if (newData.numeroSolicitud && newData.numeroSolicitud !== postulacion.numeroSolicitud) {
      throw new Error("No puedes cambiar el número de solicitud");
    }

    postulacion.nombreRepresentante = newData.nombreRepresentante;
    postulacion.ApellidoRepresentante = newData.ApellidoRepresentante;
    postulacion.rutRepresentante = newData.rutRepresentante;
    postulacion.telefonoRepresentante = newData.telefonoRepresentante;
    postulacion.emailRepresentante = newData.emailRepresentante;
    postulacion.nombreInstitucion = newData.nombreInstitucion;
    postulacion.rutInstitucion = newData.rutInstitucion;
    postulacion.emailInstitucion = newData.emailInstitucion;
    postulacion.direccionInstitucion = newData.direccionInstitucion;

    if (newData.ciudad) {
      postulacion.ciudad = newData.ciudad;
    }

    if (newData.region) {
      postulacion.region = newData.region;
    }

    const updatedPostulacion = await postulacion.save();
    return updatedPostulacion;
  } catch (error) {
    handleError(error, "postulacion.service -> updatePostulacion");
    throw error;
  }
}

async function deletePostulacion(numeroSolicitud) {
  try {
    const postulacion = await Postulacion.findOneAndDelete({ numeroSolicitud });
    if (!postulacion) {
      throw new Error("Postulación no encontrada");
    }
    return "Postulación eliminada correctamente";
  } catch (error) {
    handleError(error, "postulacion.service -> deletePostulacion");
    throw new Error("Error al eliminar la postulación: " + error.message);
  }
}

module.exports = {
  createPostulacion,
  getPostulacionesByRut,
  getPostulacionByNumeroSolicitud,
  visualizarEstadoSolicitud,
  updatePostulacion,
  deletePostulacion,
};
