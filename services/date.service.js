// Importa las bibliotecas necesarias
const boom = require('@hapi/boom'); // Para manejar errores HTTP

// Importa los modelos de Sequelize desde el archivo sequelize en la carpeta libs
const { models } = require('./../libs/sequelize');

// Define la clase DateService para manejar citas con médicos
class DateService {
  constructor() {}

  // Método para crear una nueva cita con el médico
  async create(data) {
    try {
      // Verifica si el médico y el paciente existen
      // const doctor = await models.Doctor.findByPk(data.doctorId);
      // const patient = await models.Patient.findByPk(data.patientId);
      // if (!doctor || !patient) {
      //   throw boom.notFound('El médico o el paciente no existe');
      // }

      // Crea la cita en la base de datos
      const date = await models.Date.create(data);

      // Retorna la cita creada
      return date;
    } catch (error) {
      throw boom.boomify(error);
    }
  }

  // Método para obtener todas las citas
  async find() {
    // Busca todos los usuarios en la base de datos, incluyendo la relación 'customer'
    const rta = await models.Date.findAll({
    });

    // Retorna la respuesta de la consulta
    return rta;
  }

  // Método para obtener una cita por su ID
  async findOne(id) {
    try {
      const date = await models.Date.findByPk(id, {
        include: ['doctor', 'patient']
      });
      if (!date) {
        throw boom.notFound('La cita no existe');
      }
      return date;
    } catch (error) {
      throw boom.boomify(error);
    }
  }

  // Método para actualizar una cita por su ID
  async update(id, data) {
    try {
      // Verifica si la cita existe
      const date = await models.Date.findByPk(id);
      if (!date) {
        throw boom.notFound('La cita no existe');
      }

      // Actualiza la cita en la base de datos
      const updatedDate = await date.update(data);

      // Retorna la cita actualizada
      return updatedDate;
    } catch (error) {
      throw boom.boomify(error);
    }
  }

  // Método para eliminar una cita por su ID
  async delete(id) {
    try {
      // Verifica si la cita existe
      const date = await models.Date.findByPk(id);
      if (!date) {
        throw boom.notFound('La cita no existe');
      }

      // Elimina la cita de la base de datos
      await date.destroy();

      // Retorna un mensaje de éxito
      return { message: 'La cita fue eliminada exitosamente' };
    } catch (error) {
      throw boom.boomify(error);
    }
  }
}

// Exporta la clase DateService para ser utilizada en otras partes de la aplicación
module.exports = DateService;
