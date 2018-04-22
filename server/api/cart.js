const router = require('express').Router();
const { Order } = require('../db/models');

router.get('/', (req, res, next) => {
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
    if (orderObj){
      res.status(200).json(orderObj.items);
    } else {
      res.sendStatus(404);
    }
  })
  .catch(next);
})

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

module.exports = router;
