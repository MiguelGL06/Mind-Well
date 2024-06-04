// Importa las clases necesarias de Sequelize
const { Model, DataTypes, Sequelize } = require('sequelize');

// Define el nombre de la tabla de citas en la base de datos
const DATE_TABLE = 'dates';

// Esquema del modelo de cita
const DateSchema = {
  // Definición de la columna 'id'
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  // Definición de la columna 'date'
  date: {
    allowNull: false,
    type: DataTypes.DATEONLY,
  },
  // Definición de la columna 'time'
  time: {
    allowNull: false,
    type: DataTypes.TIME,
  },
  // Definición de la columna 'description'
  description: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  // Definición de la columna 'createdAt'
  // createdAt: {
  //   allowNull: false,
  //   type: DataTypes.DATE,
  //   field: 'created_at',
  //   defaultValue: Sequelize.NOW,
  // }
};

// Definición del modelo de cita
class Date extends Model {
  // Método estático para configurar el modelo
  static config(sequelize) {
    return {
      sequelize,
      tableName: DATE_TABLE,
      modelName: 'Date',
      timestamps: false
    };
  }
}

// Exporta el modelo de cita, el esquema y el nombre de la tabla
module.exports = { Date, DateSchema, DATE_TABLE };
