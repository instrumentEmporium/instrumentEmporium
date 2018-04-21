const router = require('express').Router();
const Sequelize = require('sequelize');
const { Order } = require('../db/models');

router.get('/', (req, res, next) => {
  let userId;
  let foundOrder;
  if (req.user) {
    userId = req.user.id;
    foundOrder = Order.findOne({
      where: {
        fulfilled: false,
        userId: userId
      }
    });
  } else {
    userId = req.session.id;
    foundOrder = Order.findOne({
      where: {
        fulfilled: false,
        sessionId: userId
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

module.exports = router;
