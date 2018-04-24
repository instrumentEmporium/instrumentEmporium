const router = require('express').Router();
const Sequelize = require('sequelize');
const { Instrument } = require('../db/models');
const { Review } = require('../db/models');
const { User } = require('../db/models');
const isAdmin = require('./authMiddleware');

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

router.delete('/:id', isAdmin, (req, res, next) => {
  Instrument.destroy({
    where: {
      id: +req.params.id
    }
  })
  .then(status => res.status(201).json({
    error: false,
    message: 'Instrument has been deleted.'
  }))
  .catch(error => res.json({
    error: true,
    error: error
  }));
})

module.exports = router;
