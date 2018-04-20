const router = require('express').Router();
const Sequelize = require('sequelize');
const { Instrument } = require('../db/models');
const { Review } = require('../db/models');
const { User } = require('../db/models');

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
  Instrument.findAll({
    order: [['rating', 'DESC']],
    limit: 5
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
      model: Review,
      include: [User]
    }
  })
  .then(instrument => res.json(instrument))
  .catch(next);
})

module.exports = router;
