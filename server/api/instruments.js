const router = require('express').Router();
const { Instrument } = require('../db/models');


router.get('/', (req, res, next) => {
  Instrument.findAll({})
  .then( instruments => {
    if (instruments){
      res.status(200).json(instruments);
    } else {
      res.sendStatus(404);
    }
  })
  .catch(next);
})

router.get('/top-five', (req, res, next) => {
  Instrument.findAll()
  .then( instruments => {
    return Instrument.getTopRating(instruments)
  })
  .then(topFive => res.json(topFive))
  .catch(next);
});

router.get('/:id', (req, res, next) => {
  Instrument.findOne({
    where: {
      id: +req.params.id
    },
    include: {
      model: Review
    }
  })
  .then(instrument => res.json(instrument))
  .catch(next);
})

module.exports = router;
