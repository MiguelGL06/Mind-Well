// Importa la biblioteca Joi para la validación de esquemas
const Joi = require('joi');

// Define esquemas de validación para diferentes operaciones CRUD en la entidad de citas

// Define un esquema de validación para crear una nueva cita
const createDateSchema = Joi.object({
  date: Joi.date().iso().required(), // La fecha debe ser una cadena de fecha ISO válida y obligatoria
  time: Joi.string().required(), // La hora debe ser una cadena y obligatoria
  description: Joi.string(), // La descripción debe ser una cadena y obligatoria
  // doctorId: Joi.number().integer().required(), // El ID del médico debe ser un número entero y obligatorio
  // patientId: Joi.number().integer().required(), // El ID del paciente debe ser un número entero y obligatorio
});

// Define un esquema de validación para actualizar una cita existente
const updateDateSchema = Joi.object({
  date: Joi.date().iso(), // La fecha debe ser una cadena de fecha ISO válida (opcional)s
  time: Joi.string(), // La hora debe ser una cadena (opcional)
  description: Joi.string(), // La descripción debe ser una cadena (opcional)
  doctorId: Joi.number().integer(), // El ID del médico debe ser un número entero (opcional)
  patientId: Joi.number().integer(), // El ID del paciente debe ser un número entero (opcional)
});

// Define un esquema de validación para obtener una cita por su ID
const getDateSchema = Joi.object({
  id: Joi.number().integer().required(), // El ID debe ser un número entero y obligatorio
});

// Exporta los esquemas de validación para ser utilizados en otras partes de la aplicación
module.exports = { createDateSchema, updateDateSchema, getDateSchema };
