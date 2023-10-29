'use strict';

const Estado = require('../models/estado.model'); // Asegúrate de importar el modelo correcto
const { handleError } = require('../utils/errorHandler');

/**
 * Obtiene todos los estados de la base de datos
 * @returns {Promise} Promesa con el objeto de estados
 */
async function getEstados() {
  try {
    const estados = await Estado.find().exec();
    if (!estados) return [null, 'No hay estados'];

    return [estados, null];
  } catch (error) {
    handleError(error, 'estado.service -> getEstados');
  }
}

/**
 * Crea un nuevo estado en la base de datos
 * @param {Object} estado Objeto de estado
 * @returns {Promise} Promesa con el objeto de estado creado
 */
async function createEstado(estado) {
  try {
    const { estado: estadoName } = estado;

    const estadoFound = await Estado.findOne({ estado: estadoName });
    if (estadoFound) return [null, 'El estado ya existe'];

    const newEstado = new Estado({
      estado: estadoName,
    });
    await newEstado.save();

    return [newEstado, null];
  } catch (error) {
    handleError(error, 'estado.service -> createEstado');
  }
}

/**
 * Obtiene un estado por su id de la base de datos
 * @param {string} id Id del estado
 * @returns {Promise} Promesa con el objeto de estado
 */
async function getEstadoById(id) {
  try {
    const estado = await Estado.findById({ _id: id }).exec();

    if (!estado) return [null, 'El estado no existe'];

    return [estado, null];
  } catch (error) {
    handleError(error, 'estado.service -> getEstadoById');
  }
}

/**
 * Actualiza un estado por su id en la base de datos
 * @param {string} id Id del estado
 * @param {Object} estado Objeto de estado
 * @returns {Promise} Promesa con el objeto de estado actualizado
 */
async function updateEstado(id, estado) {
  try {
    const estadoFound = await Estado.findById(id);
    if (!estadoFound) return [null, 'El estado no existe'];

    const { estado: estadoName } = estado;

    estadoFound.estado = estadoName;
    await estadoFound.save();

    return [estadoFound, null];
  } catch (error) {
    handleError(error, 'estado.service -> updateEstado');
  }
}

/**
 * Elimina un estado por su id de la base de datos
 * @param {string} Id del estado
 * @returns {Promise} Promesa con el objeto de estado eliminado
 */
async function deleteEstado(id) {
  try {
    return await Estado.findByIdAndDelete(id);
  } catch (error) {
    handleError(error, 'estado.service -> deleteEstado');
  }
}

module.exports = {
  getEstados,
  createEstado,
  getEstadoById,
  updateEstado,
  deleteEstado,
};
