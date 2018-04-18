const Sequelize = require('sequelize');
const db = require('../db');

const Review = db.define('review', {
    description: {
        type: Seqeulize.TEXT,
        allowNull: false,
        validate: {
            isEmpty: false
        }
    }
});

module.exports = Review;