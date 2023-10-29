const Joi = require("joi");

const postulacionSchema = Joi.object({
  ID_concurso: Joi.string().required(),
  numeroSolicitud: Joi.string().required(),
  nombreRepresentante: Joi.string().required(),
  ApellidoRepresentante: Joi.string().required(),
  rutRepresentante: Joi.string().required(),
  telefonoRepresentante: Joi.string().required(),
  emailRepresentante: Joi.string().email().required(),
  nombreInstitucion: Joi.string().required(),
  rutInstitucion: Joi.string().required(),
  emailInstitucion: Joi.string().email().required(),
  direccionInstitucion: Joi.string().required(),
  Ciudad: Joi.string().required(),
  Region: Joi.string().required(),
});

module.exports = postulacionSchema;
