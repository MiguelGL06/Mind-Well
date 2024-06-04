const express = require('express'); // Importa Express para crear un enrutador
const DateService = require('../services/date.service'); // Importa el servicio de citas para realizar operaciones CRUD en las citas
const validatorHandler = require('../middlewares/validator.handler'); // Importa el middleware para manejar la validación de esquemas
const { createDateSchema, updateDateSchema, getDateSchema } = require('./../schemas/date.schema'); // Importa los esquemas de validación para las citas

const router = express.Router(); // Crea un enrutador de Express
const service = new DateService(); // Crea una instancia del servicio de citas

// Maneja las solicitudes GET para obtener todas las citas
router.get('/', async (req, res, next) => {
  try {
    const dates = await service.find(); // Obtiene todas las citas utilizando el servicio
    res.json(dates); // Envía la respuesta con las citas en formato JSON
  } catch (error) {
    next(error); // Pasa cualquier error al siguiente middleware de manejo de errores
  }
});

// Maneja las solicitudes GET para obtener una cita por su ID
router.get('/:id',
  validatorHandler(getDateSchema, 'params'), // Valida el parámetro de ID utilizando el esquema correspondiente
  async (req, res, next) => {
    try {
      const { id } = req.params; // Obtiene el ID del parámetro de la solicitud
      const date = await service.findOne(id); // Busca una cita por su ID utilizando el servicio
      res.json(date); // Envía la respuesta con la cita encontrada en formato JSON
    } catch (error) {
      next(error); // Pasa cualquier error al siguiente middleware de manejo de errores
    }
  }
);

// Maneja las solicitudes POST para crear una nueva cita
router.post('/',
  validatorHandler(createDateSchema, 'body'), // Valida el cuerpo de la solicitud utilizando el esquema correspondiente
  async (req, res, next) => {
    try {
      const body = req.body; // Obtiene los datos de la cita del cuerpo de la solicitud
      const newDate = await service.create(body); // Crea una nueva cita utilizando el servicio
      res.status(201).json(newDate); // Envía la respuesta con la nueva cita creada en formato JSON y con el código de estado 201 (Creado)
    } catch (error) {
      next(error); // Pasa cualquier error al siguiente middleware de manejo de errores
    }
  }
);

// Maneja las solicitudes PATCH para actualizar una cita existente por su ID
router.patch('/:id',
  validatorHandler(getDateSchema, 'params'), // Valida el parámetro de ID utilizando el esquema correspondiente
  validatorHandler(updateDateSchema, 'body'), // Valida el cuerpo de la solicitud utilizando el esquema correspondiente
  async (req, res, next) => {
    try {
      const { id } = req.params; // Obtiene el ID del parámetro de la solicitud
      const body = req.body; // Obtiene los datos actualizados de la cita del cuerpo de la solicitud
      const updatedDate = await service.update(id, body); // Actualiza la cita utilizando el servicio
      res.json(updatedDate); // Envía la respuesta con la cita actualizada en formato JSON
    } catch (error) {
      next(error); // Pasa cualquier error al siguiente middleware de manejo de errores
    }
  }
);

// Maneja las solicitudes DELETE para eliminar una cita existente por su ID
router.delete('/:id',
  validatorHandler(getDateSchema, 'params'), // Valida el parámetro de ID utilizando el esquema correspondiente
  async (req, res, next) => {
    try {
      const { id } = req.params; // Obtiene el ID del parámetro de la solicitud
      await service.delete(id); // Elimina la cita utilizando el servicio
      res.status(201).json({id}); // Envía la respuesta con el ID de la cita eliminada en formato JSON y con el código de estado 201 (Creado)
    } catch (error) {
      next(error); // Pasa cualquier error al siguiente middleware de manejo de errores
    }
  }
);

module.exports = router; // Exporta el enrutador para su uso en otras partes de la aplicación
