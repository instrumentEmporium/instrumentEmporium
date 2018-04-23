const router = require('express').Router()
const {User} = require('../db/models')

module.exports = router

//gatekeeper middleware, not allow any user, logged in or not, to access these users
//can make this a utility function, etc for this and place in a different file
router.get('/', (req, res, next) => {
  if (req.user) {
    if (req.user.isAdmin) next();
  }
  let err = new Error('You\'re not an admin! Get out of here!')
  err.status = 401;
  next(err); //or throw(err);
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

