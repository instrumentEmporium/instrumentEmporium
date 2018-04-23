const router = require('express').Router();
const { Order } = require('../db/models');

router.put(`/:id`, (req, res, next) => {
  Order.findById(req.params.id)
    .then(order => order.update(req.body))
    .then(updatedOrder => {
      res.status(200).json(updatedOrder);
    })
})

router.get('/:id', (req, res, next) => {
  let foundOrder;
  if (req.user) {
    foundOrder = Order.findOne({
      where: {
        fulfilled: false,
        userId: req.user.id
      }
    });
  } else {
    foundOrder = Order.findOne({
      where: {
        fulfilled: false,
        sessionId: req.session.id
      }
    })
  }
  foundOrder
    .then(orderObj => {
      if (orderObj) {
        res.status(200).json(orderObj);
      } else {
        res.sendStatus(404);
      }
    })
    .catch(next);
})

router.get('/:id/checkout', (req, res, next) => {
  Order.findById(req.params.id)
    .then(order => {
      if (order) {
        res.status(200).json(order);
      } else {
        res.sendStatus(404);
      }
    })
    .catch(next)
});

router.post('/', (req, res, next) => {
  let userId = req.user ? req.user.id : null;
  let sessionId = userId ? null : req.session.id;
  Order.create({
    fulfilled: false,
    userId: userId,
    sessionId: sessionId,
    items: [req.body]
  })
    .then(cart => res.status(201).json(cart))
    .catch(next);
})

router.delete('/:id', (req, res, next) => {
  let userId = req.user ? req.user.id : null;
  let sessionId = req.session.id;
  if (req.user) {
    Order.destroy({
      where: {
        fulfilled: false,
        userId: req.user.id
      }
    })
      .then(affectedRows => res.sendStatus(204))
      .catch(next);
  } else {
    Order.destroy({
      where: {
        fulfilled: false,
        sessionId: req.session.id
      }
    })
      .then(affectedRows => res.sendStatus(204))
      .catch(next);
  }
})


module.exports = router;
