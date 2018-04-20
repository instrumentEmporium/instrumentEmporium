const Sequelize = require('sequelize');
const db = require('../db');

const Review = db.define('review', {
  description: {
      type: Sequelize.TEXT,
      validate: {
          isEmpty: false
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
