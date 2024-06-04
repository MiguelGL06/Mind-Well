'use strict';

const { DateSchema, DATE_TABLE } = require('./../models/date.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(DATE_TABLE, DateSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(DATE_TABLE);
  }
};
