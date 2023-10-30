"use strict";

const Joi = require("joi");
const ESTADOS_PERMITIDOS = require("../constants/estados.constants");

/**
 * Esquema de validación para el cuerpo de la solicitud de estado.
 * @constant {Object}
 */
const estadoBodySchema = Joi.object({
  id_evaluacion: Joi.string().required().messages({
    "string.empty": "El campo 'id_evaluacion' no puede estar vacío.",
    "any.required": "El campo 'id_evaluacion' es obligatorio.",
  }),
  id_postulacion: Joi.string().required().messages({
    "string.empty": "El campo 'id_postulacion' no puede estar vacío.",
    "any.required": "El campo 'id_postulacion' es obligatorio.",
  }),
  estados: Joi.array()
    .items(Joi.string().valid(...ESTADOS_PERMITIDOS))
    .required()
    .messages({
      "array.base": "El estado debe ser de tipo array.",
      "any.required": "El estado es obligatorio.",
      "string.base": "El estado debe ser de tipo string.",
      "any.only": "El estado proporcionado no es válido.",
    }),
  puntos: Joi.number().optional().messages({
    "number.base": "El campo 'puntos' debe ser de tipo numérico.",
  }),
  fechaModificacion: Joi.date().optional().messages({
    "date.base": "El campo 'fechaModificacion' debe ser de tipo fecha.",
  }),
}).messages({
  "object.unknown": "No se permiten propiedades adicionales.",
});

module.exports = { estadoBodySchema };