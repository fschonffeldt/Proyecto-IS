"use strict";

const Postulacion = require("../models/postulacion.model");

// Crear una nueva postulación
async function createPostulacion(postulacionData) {
  try {
    // Asegura que el número de solicitud se genere automáticamente
    postulacionData.numeroSolicitud = generateSolicitudNumber(); 

    // Valida que la ciudad y región existan en la base de datos
    const ciudad = await Ciudad.findById(postulacionData.ciudad);
    if (!ciudad) {
      throw new Error("La ciudad especificada no existe en la base de datos.");
    }

    const region = await Region.findById(postulacionData.region);
    if (!region) {
      throw new Error("La región especificada no existe en la base de datos.");
    }

    // Crea la postulación si las validaciones pasan
    const postulacion = await Postulacion.create(postulacionData);
    return postulacion;
  } catch (error) {
    throw new Error("Error al crear la postulación: " + error.message);
  }
}

// Listar todas las postulaciones por rut del representante
async function getPostulacionesByRut(rutRepresentante) {
  try {
    const postulaciones = await Postulacion.find({ rutRepresentante });
    return postulaciones;
  } catch (error) {
    throw new Error("Error al obtener las postulaciones: " + error.message);
  }
}

// Buscar una postulación por número de solicitud
async function getPostulacionByNumeroSolicitud(numeroSolicitud) {
  try {
    const postulacion = await Postulacion.findOne({ numeroSolicitud });
    if (!postulacion) {
      throw new Error("Postulación no encontrada");
    }
    return postulacion;
  } catch (error) {
    throw new Error("Error al obtener la postulación: " + error.message);
  }
}

// Visualizar el estado de la solicitud por número de solicitud
async function visualizarEstadoSolicitud(numeroSolicitud) {
  try {
    const postulacion = await Postulacion.findOne({ numeroSolicitud });
    if (!postulacion) {
      throw new Error("Postulación no encontrada");
    }
    // Aquí puedes agregar lógica para determinar el estado de la solicitud
    return postulacion.estado; // Asume que la postulación tiene un campo "estado"
  } catch (error) {
    throw new Error("Error al visualizar el estado de la solicitud: " + error.message);
  }
}

// Actualizar una solicitud
async function updatePostulacion(numeroSolicitud, newData) {
  try {
    const postulacion = await Postulacion.findOne({ numeroSolicitud });
    if (!postulacion) {
      throw new Error("Postulación no encontrada");
    }

    // Valida que la ciudad y región existan en la base de datos
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

    // Validar que el número de solicitud no se pueda cambiar
    if (newData.numeroSolicitud && newData.numeroSolicitud !== postulacion.numeroSolicitud) {
      throw new Error("No puedes cambiar el número de solicitud");
    }

    // Realiza la actualización de otros campos permitidos
    postulacion.nombreRepresentante = newData.nombreRepresentante;
    postulacion.ApellidoRepresentante = newData.ApellidoRepresentante;
    postulacion.rutRepresentante = newData.rutRepresentante;
    postulacion.telefonoRepresentante = newData.telefonoRepresentante;
    postulacion.emailRepresentante = newData.emailRepresentante;
    postulacion.nombreInstitucion = newData.nombreInstitucion;
    postulacion.rutInstitucion = newData.rutInstitucion;
    postulacion.emailInstitucion = newData.emailInstitucion;
    postulacion.direccionInstitucion = newData.direccionInstitucion;

    // Realiza la actualización de la ciudad y región, si se especifican
    if (newData.ciudad) {
      postulacion.ciudad = newData.ciudad;
    }

    if (newData.region) {
      postulacion.region = newData.region;
    }

    // Guarda la postulación actualizada
    const updatedPostulacion = await postulacion.save();
    return updatedPostulacion;
  } catch (error) {
    throw error; // Deja que el manejador de errores en el controlador se encargue de manejar esto
  }
}

// Eliminar una solicitud por número de solicitud
async function deletePostulacion(numeroSolicitud) {
  try {
    const postulacion = await Postulacion.findOneAndDelete({ numeroSolicitud });
    if (!postulacion) {
      throw new Error("Postulación no encontrada");
    }
    return "Postulación eliminada correctamente";
  } catch (error) {
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
