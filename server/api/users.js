const router = require('express').Router()
const {User} = require('../db/models')

module.exports = router

router.get('/', (req, res, next) => {
    if(req.user){
      if(req.user.dataValues.admin) next()
    }
  }, (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
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

  
  // (req, res, next) => {
  //   if (req.user) {
  //     if (req.user.dataValues.admin) next();
  //   }
  //   let err = new Error('You\'re not an admin! Get out of here!')
  //   err.status = 401;
  //   next(err); //or throw(err);
  // }
