const router = require('express').Router()
const {User} = require('../db/models')
const isAdmin = require('./authMiddleware');

module.exports = router

router.get('/', isAdmin, (req, res, next) => {
  User.findAll({
    attributes: ['id', 'email', 'admin']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.put('/admin/:id', (req, res, next) => {
  const { admin } = req.body;
  User.findById(+req.params.id)
      .then(adminUser => {
          return adminUser.update({
            admin
          })
      })
      .then(newAdmin => {
          res.json(newAdmin);
      })
      .catch(next);
})

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

  User.findById(req.params.id)
    .then(user => {
      if(user){
        res.status(201);
        return user.update({
          firstName,
          lastName,
          addressLine1,
          addressLine2,
          city,
          state,
          zip,
          phoneNumber
        });
      } else {
        res.sendStatus(404);
      }
    })
    .then(user => {
      res.json(user);
    })
    .catch(next);
}); 
    
  
