const { respondSuccess, respondError } = require("../utils/resHandler");
const ProyecService = require("../controllers/proyect.controller.js");
const { proyecBodySchema, proyecIdSchema } = require("../schema/proyec.schema");
const { handleError } = require("../utils/errorHandler");

async function getProyectos(req, res) {
  try {
    const [proyectos, errorProyectos] = await ProyecService.getProyectos();
    if (errorProyectos) return respondError(req, res, 404, errorProyectos);

    proyectos.length === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, proyectos);
  } catch (error) {
    handleError(error, "proyec.controller -> getProyectos");
    respondError(req, res, 500, "No se pudieron obtener los proyectos");
  }
}

async function createProyecto(req, res) {
  try {
    const { body } = req;
    const { error: bodyError } = proyecBodySchema.validate(body);
    if (bodyError) return respondError(req, res, 400, bodyError.message);

    const [newProyecto, proyectoError] = await ProyecService.createProyecto(body);

    if (proyectoError) return respondError(req, res, 400, proyectoError);
    if (!newProyecto) {
      return respondError(req, res, 400, "No se creó el proyecto");
    }

    respondSuccess(req, res, 201, newProyecto);
  } catch (error) {
    handleError(error, "proyec.controller -> createProyecto");
    respondError(req, res, 500, "No se creó el proyecto");
  }
}

async function getProyectoById(req, res) {
  try {
    const { params } = req;
    const { error: paramsError } = proyecIdSchema.validate(params);
    if (paramsError) return respondError(req, res, 400, paramsError.message);

    const [proyecto, errorProyecto] = await ProyecService.getProyectoById(params.id);

    if (errorProyecto) return respondError(req, res, 404, errorProyecto);

    respondSuccess(req, res, 200, proyecto);
  } catch (error) {
    handleError(error, "proyecto.controller -> getProyectoById");
    respondError(req, res, 500, "No se pudo obtener el proyecto");
  }
}

async function updateProyecto(req, res) {
  try {
    const { params, body } = req;
    const { error: paramsError } = proyecIdSchema.validate(params);
    if (paramsError) return respondError(req, res, 400, paramsError.message);

    const { error: bodyError } = proyecBodySchema.validate(body);
    if (bodyError) return respondError(req, res, 400, bodyError.message);

    const [proyecto, proyectoError] = await ProyecService.updateProyecto(params.id, body);

    if (proyectoError) return respondError(req, res, 400, proyectoError);

    respondSuccess(req, res, 200, proyecto);
  } catch (error) {
    handleError(error, "proyec.controller -> updateProyecto");
    respondError(req, res, 500, "No se pudo actualizar la evaluación");
  }
}

async function deleteProyecto(req, res) {
  try {
    const { params } = req;
    const { error: paramsError } = proyecIdSchema.validate(params);
    if (paramsError) return respondError(req, res, 400, paramsError.message);

    const proyecto = await ProyecService.deleteProyecto(params.id);
    !proyecto
      ? respondError(
          req,
          res,
          404,
          "No se encontró el proyecto solicitado",
          "Verifique el id ingresado"
        )
      : respondSuccess(req, res, 200, proyecto);
  } catch (error) {
    handleError(error, "proyec.controller -> deleteProyecto");
    respondError(req, res, 500, "No se pudo eliminar la evaluación");
  }
}

module.exports = {
  getProyectos,
  createProyecto,
  getProyectoById,
  updateProyecto,
  deleteProyecto,
};