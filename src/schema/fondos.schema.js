// schemas/fondo.schema.js
"use strict";

const Joi = require("joi");

const fondoBodySchema = Joi.object({
  montoTotal: Joi.number().required().messages({
    "number.base": "El monto total debe ser un número.",
    "any.required": "El monto total es obligatorio."
  }),
  montoAsignado: Joi.number().default(0).messages({
    "number.base": "El monto asignado debe ser un número.",
  }),
  montoRestante: Joi.number().messages({
    "number.base": "El monto restante debe ser un número.",
  }),
}).messages({
  "object.unknown": "No se permiten propiedades adicionales.",
});

module.exports = { fondoBodySchema };
