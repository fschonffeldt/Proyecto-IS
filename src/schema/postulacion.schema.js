const Joi = require("joi");

// Esquema de validación para crear o actualizar una postulación
const RutRegex = /^(\d{7,8}(\-[\dkK])?|\d{6,7}[\dkK])$/;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
const TelefonoRegex = /^\d{9}$/; // Expresión regular para el teléfono

const postulacionSchema = Joi.object({
  nombreRepresentante: Joi.string().required().messages({
    "string.empty": "El nombre del Representante no puede estar vacío.",
    "any.required": "El nombre del Representante es obligatorio.",
    "string.base": "El nombre del Representante debe ser de tipo string.",
  }),
  ApellidoRepresentante: Joi.string().required().messages({
    "string.empty": "El apellido del Representante no puede estar vacío.",
    "any.required": "El apellido del Representante es obligatorio.",
    "string.base": "El apellido del Representante debe ser de tipo string.",
  }),
  rutRepresentante: Joi.string()
    .required()
    .regex(RutRegex)
    .messages({
      "string.empty": "El rut del Representante no puede estar vacío.",
      "any.required": "El rut del Representante es obligatorio.",
      "string.base": "El rut del Representante debe ser de tipo string.",
    }),
  telefonoRepresentante: Joi.string()
    .required()
    .regex(TelefonoRegex)
    .messages({
      "string.empty": "El teléfono del Representante no puede estar vacío.",
      "any.required": "El teléfono del Representante es obligatorio.",
      "string.base": "El teléfono del Representante debe ser de tipo string.",
    }),
  emailRepresentante: Joi.string()
    .email()
    .required()
    .regex(EmailRegex)
    .messages({
      "string.empty": "El email del Representante no puede estar vacío.",
      "any.required": "El email del Representante es obligatorio.",
      "string.base": "El email del Representante debe ser de tipo string.",
      "string.email": "El email del Representante debe tener un formato válido.",
    }),
  nombreInstitucion: Joi.string().required().messages({
    "string.empty": "El nombre de la Institución no puede estar vacío.",
    "any.required": "El nombre de la Institución es obligatorio.",
    "string.base": "El nombre de la Institución debe ser de tipo string.",
  }),
  rutInstitucion: Joi.string()
    .required()
    .regex(RutRegex)
    .messages({
      "string.empty": "El rut de la Institución no puede estar vacío.",
      "any.required": "El rut de la Institución es obligatorio.",
      "string.base": "El rut de la Institución debe ser de tipo string.",
    }),
  emailInstitucion: Joi.string()
    .email()
    .required()
    .regex(EmailRegex)
    .messages({
      "string.empty": "El email de la Institución no puede estar vacío.",
      "any.required": "El email de la Institución es obligatorio.",
      "string.base": "El email de la Institución debe ser de tipo string.",
      "string.email": "El email de la Institución debe tener un formato válido.",
    }),
  direccionInstitucion: Joi.string().required(),
  region: Joi.string().required(), // Aquí debes ajustar la validación según tus necesidades
  ciudad: Joi.string().required(), // Aquí debes ajustar la validación según tus necesidades
});

// Esquema de validación para buscar una postulación por número de solicitud
const numeroSolicitudSchema = Joi.object({
  numeroSolicitud: Joi.string().required().messages({
    "string.empty": "El número de solicitud no puede estar vacío.",
    "any.required": "El número de solicitud es obligatorio.",
    "string.base": "El número de solicitud debe ser de tipo string.",
  }),
});

// Esquema de validación para eliminar una postulación
const deletePostulacionSchema = Joi.object({
  numeroSolicitud: Joi.string().required().messages({
    "string.empty": "El número de solicitud no puede estar vacío.",
    "any.required": "El número de solicitud es obligatorio.",
    "string.base": "El número de solicitud debe ser de tipo string.",
  }),
});

module.exports = {
  postulacionSchema,
  numeroSolicitudSchema,
  deletePostulacionSchema,
};
