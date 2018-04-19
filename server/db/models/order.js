const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  items: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false
  },
  orderTotal: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  sessionId: {
    type: Sequelize.INTEGER,
    allowNull: false
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

