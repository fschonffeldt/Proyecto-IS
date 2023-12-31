"use strict";

const Joi = require("joi");

/**
 * Esquema de validación para el cuerpo de la solicitud de fondo.
 * @constant {Object}
 */
const fondoBodySchema = Joi.object({
  nombre: Joi.string().required().messages({
    "string.empty": "El nombre del fondo no puede estar vacío.",
    "any.required": "El nombre del fondo es obligatorio.",
    "string.base": "El nombre del fondo debe ser de tipo string.",
  }),
  montoTotal: Joi.number().required().min(1).messages({
    "number.base": "El monto total debe ser de tipo numérico.",
    "any.required": "El monto total es obligatorio.",
    "number.min": "El monto total debe ser mayor que cero.",
  }),
}).messages({
  "object.unknown": "No se permiten propiedades adicionales.",
});

/**
 * Esquema de validación para el id de fondo.
 * @constant {Object}
 */
const fondoIdSchema = Joi.object({
  id: Joi.string()
    .required()
    .pattern(/^(?:[0-9a-fA-F]{24}|[0-9a-fA-F]{12})$/)
    .messages({
      "string.empty": "El id no puede estar vacío.",
      "any.required": "El id es obligatorio.",
      "string.base": "El id debe ser de tipo string.",
      "string.pattern.base": "El id proporcionado no es un ObjectId válido.",
    }),
});

module.exports = { fondoBodySchema, fondoIdSchema };

