const Sequelize = require('sequelize');
const db = require('../db');

// OB/SZ: consider more validations, like min/max for price/quantity, unique for name, url validator for imageUrl
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
  // OB/SZ: integer, great! industry standard for financial data, avoids rounding errors
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

// OB/SZ: awesome!
// OB/SZ: could be more performant by doing a database operation instead of sorting in js
Instrument.getTopRating = function(instruments) {
  let sorted = instruments.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
  const topFive = sorted.slice(0, 5);
  return topFive;
};

module.exports = Instrument
