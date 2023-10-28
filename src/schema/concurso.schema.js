// schemas/concurso.schema.js
"use strict";

const Joi = require("joi");

const concursoBodySchema = Joi.object({
  montoTotal: Joi.number().required().messages({
    "number.base": "El monto total debe ser un número.",
    "any.required": "El monto total es obligatorio."
  }),
  numeroDeGanadores: Joi.number().required().messages({
    "number.base": "El número de ganadores debe ser un número.",
    "any.required": "El número de ganadores es obligatorio."
  }),
  fechaTerminoPostulacion: Joi.date().required().messages({
    "date.base": "La fecha de término de postulación debe ser una fecha válida.",
    "any.required": "La fecha de término de postulación es obligatoria."
  }),
  fechaResultadosPostulacion: Joi.date().required().messages({
    "date.base": "La fecha de resultados de postulación debe ser una fecha válida.",
    "any.required": "La fecha de resultados de postulación es obligatoria."
  }),
  fondo: Joi.object().required().keys({
    montoTotal: Joi.number().required(),
    montoAsignado: Joi.number().default(0),
  }).messages({
    "object.base": "El fondo debe ser un objeto.",
    "any.required": "El fondo es obligatorio."
  }),
}).messages({
  "object.unknown": "No se permiten propiedades adicionales.",
});

module.exports = { concursoBodySchema };
