const stripe = require('stripe')('sk_test_S2jRfEwtxHqeeRLnwXLqnFmI');
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

  router.post('/save-stripe-token', (req, res, next) => {
    let amount = req.body.price * 100;
      stripe.charges.create({
        amount,
        source: req.body.token.id,
        description: 'Testing',
        currency: 'usd',
      })
      .then(charge => res.status(201).json(charge))
      .catch(next);
    })



module.exports = router;
