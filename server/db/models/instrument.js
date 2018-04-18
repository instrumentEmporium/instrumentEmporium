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
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
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
  rating: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 5
    }
  }
})

Instrument.getTopRating = function(instruments) {
  let sorted = instruments.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
  const topFive = sorted.slice(0, 5);
  return topFive;
};

module.exports = Instrument
