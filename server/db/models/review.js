const Sequelize = require('sequelize');
const db = require('../db');

const Review = db.define('review', {
  subject: {
      type: Sequelize.TEXT,
      validate: {
          notEmpty: true
      }
  },
  body: {
    type: Sequelize.TEXT,
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
});

module.exports = Review;
