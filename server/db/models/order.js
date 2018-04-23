const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  //email address; guests can pull up past orders based off email
  //security??
  //Normalization for 'addresses' table; billing addresses v. shipping addresses
  items: {
    type: Sequelize.ARRAY(Sequelize.JSONB),
  },
  sessionId: {
    type: Sequelize.STRING
  },
  fulfilled: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  phoneNumber: {
    type: Sequelize.INTEGER
  },
  addressLine1: {
    type: Sequelize.STRING
  },
  addressLine2: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  zip: {
    type: Sequelize.STRING
  },
});

module.exports = Order;

