// operaciones crud
import Formulario from '../../models/formulario.model.js';

export const getFormulario = async (req, res) => {
  const formulario = await formulario.find();
  res.json(formulario);
};

export const createFormulario = async (req, res) => {
  const newFormulario = new Formulario(req.body);
  const formularioSaved = await newFormulario.save();
  res.status(201).json(formularioSaved);
};

export const getFormularioById = async (req, res) => {
  const formulario = await Formulario.findById(req.params.formularioId);
  res.status(200).json(formulario);
};

export const updateFormularioById = async (req, res) => {
  const updatedFormulario = await Formulario.findByIdAndUpdate(
    req.params.FormularioId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedFormulario);
};

export const deleteFormularioById = async (req, res) => {
  await Formulario.findByIdAndDelete(req.params.formularioId);
  res.status(204).json();
};