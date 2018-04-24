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

router.put('/:id', (req, res, next) => {
  const {
    firstName,
      lastName,
      addressLine1,
      addressLine2,
      city,
      state,
      zip,
      phoneNumber,
   } = req.body;

Order.findById(req.params.id)
   .then(order => {
     if (order){
       res.status(201);
       return order.update({
        firstName,
        lastName,
        phoneNumber,
        addressLine1,
        addressLine2,
        city,
        state,
        zip
        });
     } else {
       res.sendStatus(404);
     }
   })
   .then(order => {
     res.json(order);
   })
   .catch(next);
  });


module.exports = router;
