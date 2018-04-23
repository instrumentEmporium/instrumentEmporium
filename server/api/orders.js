const router = require('express').Router();
const Sequelize = require('sequelize');
const { Order } = require('../db/models') 

router.get('/', (req, res, next) => {
    Order.findAll({})
    .then(orders => res.json(orders))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
    Order.findOne({
        where: {
            id: +req.params.id
        }
    })
    .then(order => res.json(order))
    .catch(next);
});

module.exports = router;