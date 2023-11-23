const Joi = require("joi");

/**
 * Esquema de validación para el cuerpo de la solicitud de evaluación.
 * @constant {Object}
 */
const proyectoBodySchema = Joi.object({
  Tema: Joi.string().optional().allow("").messages({
    "string.empty": "El campo 'Tema' no puede estar vacío.",
  }),
  Descripcion: Joi.string().optional().allow("").messages({
    "string.empty": "El campo 'Descripcion' no puede estar vacío.",
  }),
  Monto: Joi.number().optional().messages({
    "number.base": "El campo 'Monto' debe ser de tipo numérico.",
  }),
  fechaCreac: Joi.date().optional().messages({
    "date.base": "El campo 'fechaCreac' debe ser de tipo fecha.",
  }),
}).messages({
  "object.unknown": "No se permiten propiedades adicionales.",
});

module.exports = { proyectoBodySchema };