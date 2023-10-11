import { Router } from 'express';

import {
  getFormulario,
  createFormulario,
  getFormularioById,
  updateFormularioById,
  deleteFormularioById,
} from '../controller/formulario.controller.js';

const router = Router();

//api/products
router.post('/', createFormulario);
router.get('/', getFormulario);
router.get('/:formularioId', getFormularioById);
router.put('/:formularioId', updateFormularioById);
router.delete('/:formularioId', deleteFormularioById);

export default router;