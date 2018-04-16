const router = require('express').Router();
const { Instrument } = require('../db/models');

module.exports = router;

router.get('/', (req, res, next) => {
  Instrument.findAll({})
    .then( instrument => {
      if (instrument){
        res.status(200).json(instrument);
      } else {
        res.sendStatus(404);
      }
    })
    .catch(next);
})
