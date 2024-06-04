const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Date, DateSchema } = require('./date.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Date.init(DateSchema, Date.config(sequelize));


  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  //Date.associate(sequelize.models);
}

module.exports = setupModels;
