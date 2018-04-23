const Sequelize = require('sequelize');
const db = require('../db');

const Instrument = db.define('instrument', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    //this validation is for STRINGS
    //prices below zero, unless you want to pay people
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    //inventory can't go below zero
    validate: {
      notEmpty: true
    }
  },
  //validations: isUrl
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  //GB: how does this update?
  //Virtual vs. getter vs. hook
  rating: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 5
    }
  },
  audioUrl: {
    type: Sequelize.STRING,
  }
});

module.exports = Instrument;
