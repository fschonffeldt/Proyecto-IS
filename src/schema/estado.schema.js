"use strict";

const Joi = require("joi");
const ESTADO = require("../constants/estado.constants");

/**
 * Esquema de validación para el cuerpo de la solicitud de usuario.
 * @constant {Object}
 */
const estadoBodySchema = Joi.object({
  estado: Joi.array()
    .items(Joi.string().valid(...ESTADO))
    .required()
    .messages({
      "array.base": "El estado debe ser de tipo array.",
      "any.required": "El estado es obligatorio.",
      "string.base": "El estado debe ser de tipo string.",
      "any.only": "El estado proporcionado no es válido.",
    }),
}).messages({
  "object.unknown": "No se permiten propiedades adicionales.",
});

module.exports = { estadoBodySchema, estadoIdSchema };
