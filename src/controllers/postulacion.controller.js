"use strict";

const PostulacionesService = require("../services/postulacion.service");
const { respondSuccess, respondError } = require("../utils/resHandler");
const { postulacionSchema } = require("../schema/postulacion.schema");
const RegionService = require("../services/region.service");
const CiudadService = require("../services/ciudad.service");


async function createPostulacion(req, res) {
  try {
    const { pais, region, ciudad } = req.body;

    // Valida los datos de entrada con el esquema
    const { error } = postulacionSchema.validate(req.body);
    if (error) {
      return respondError(req, res, 400, error.details[0].message);
    }

    // Realiza consultas a la base de datos para validar pais, region y ciudad
    const regionValida = await RegionService.validarRegion(region);
    const ciudadValida = await CiudadService.validarCiudad(ciudad);

    if ( !regionValida || !ciudadValida) {
      return respondError(req, res, 400, " la región y/o la ciudad no son válidos");
    }

    // Completa con los datos necesarios para crear la postulación
    const postulacionData = {
      fecha: new Date(), // Puedes establecer la fecha actual
      concurso: "ID_DEL_CONCURSO", // Reemplaza 'ID_DEL_CONCURSO' con el ID del concurso apropiado
      estado: "ID_DEL_ESTADO", // Reemplaza 'ID_DEL_ESTADO' con el ID del estado apropiado
      nombreRepresentante: req.body.nombreRepresentante,
      ApellidoRepresentante: req.body.ApellidoRepresentante,
      rutRepresentante: req.body.rutRepresentante,
      telefonoRepresentante: req.body.telefonoRepresentante,
      emailRepresentante: req.body.emailRepresentante,
      nombreInstitucion: req.body.nombreInstitucion,
      rutInstitucion: req.body.rutInstitucion,
      emailInstitucion: req.body.emailInstitucion,
      direccionInstitucion: req.body.direccionInstitucion,
      region: req.body.region,
      ciudad: req.body.ciudad,
      estados: req.body.estados,
      // Agrega otros campos según sea necesario
    };

    // Continúa con la creación de la postulación si todos los datos son válidos
    const postulacion = await PostulacionesService.createPostulacion(postulacionData);
    
    return respondSuccess(req, res, 201, postulacion);
  } catch (error) {
    return respondError(req, res, 500, error.message);
  }
}
// Actualizar una postulación (incluyendo cambiar el estado)
async function updatePostulacion(req, res) {
  try {
    const postId = req.params.id;
    const newData = req.body;

    // Valida los datos de entrada con el esquema
    const { error } = postulacionSchema.validate(newData);
    if (error) {
      return respondError(req, res, 400, error.details[0].message);
    }

    // Realiza consultas a la base de datos para validar pais y region
    const paisValido = await PostulacionesService.validarPais(newData.pais);
    const regionValida = await PostulacionesService.validarRegion(newData.region);

    if (!paisValido || !regionValida) {
      return respondError(req, res, 400, "El país y/o la región no son válidos");
    }

    const updatedPostulacion = await PostulacionesService.updatePostulacion(postId, newData);
    res.status(200).json(updatedPostulacion);
  } catch (error) {
    respondError(req, res, 500, error.message);
  }
}

// Obtener todas las postulaciones por RUT (excepto el campo "fondo")
async function getPostulacionesByRut(req, res) {
  try {
    const rut = req.params.rut;
    const postulaciones = await PostulacionesService.getPostulacionesByRut(rut);
    respondSuccess(req, res, 200, postulaciones);
  } catch (error) {
    respondError(req, res, 500, error.message);
  }
}

// Buscar una postulación específica por número de ID
async function getPostulacionById(req, res) {
  try {
    const postId = req.params.id;
    const postulacion = await PostulacionesService.getPostulacionById(postId);
    respondSuccess(req, res, 200, postulacion);
  } catch (error) {
    respondError(req, res, 500, error.message);
  }
}

async function deletePostulacionById(req, res) {
  try {
    const postId = req.params.id;
    await PostulacionesService.deletePostulacionById(postId);
    respondSuccess(req, res, 204, "La postulación ha sido eliminada con éxito");
  } catch (error) {
    respondError(req, res, 500, error.message);
  }
}


module.exports = {
  createPostulacion,
  deletePostulacionById,
  getPostulacionesByRut,
  getPostulacionById,
  updatePostulacion,
};
