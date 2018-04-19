const router = require('express').Router();
const Sequelize = require('sequelize');
const { Order } = require('../db/models');

router.get('/', (req, res, next) => {
  Order.findAll({})
  .then( instruments => {
    if (instruments){
      res.status(200).json(instruments);
    } else {
      res.sendStatus(404);
    }
  })
  .catch(next);
})
