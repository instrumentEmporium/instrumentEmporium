const {expect} = require('chai');
const app = require('../index');
const agent = require('supertest')(app);
const db = require('../db');
const Instrument = db.model('instrument');

describe('Instrument Api Route', () => {
    before(() => db.sync({ force: true }));
    after(() => db.sync({ force: true }));
  
    describe('Instrument routes', () => {
        let storedInstruments;
    
        const instrumentData = [
          {
            name: 'tuba',
            type: 'brass',
            price: 5,
            quantity: 1,
            imageUrl: 'hhtp:fakeurl.com',
            description: 'Tuba Test, Test Tuba, TestBa, TubTest?',
            rating: 4,
            audioUrl: 'the sound of a tuba'
          },
          {
            name: 'guitar',
            type: 'string',
            price: 100,
            quantity: 500,
            imageUrl: 'hhtp:fakeurl.com',
            description: 'Guitar test for route',
            rating: 4,
            audioUrl: 'the sound of a tuba'
          }
        ];
    
        before(() =>
          Instrument.bulkCreate(instrumentData)
          .then(newInstruments => {
            newInstruments = newInstruments.map(instrument => instrument.dataValues);
          })
        );
    
        // Route for fetching all Instruments
        describe('GET /api/instruments', () => {
          it('serves up all instruments', () => {
            return agent
            .get('/api/instruments')
            .expect(200)
            .then(response => {
              expect(response.body).to.have.length(2);
            });
          });
        });

        // Route for fetching singleInstrument
        describe('Get /api/instruments/${id}', () => {
            it('serves single instrument')
        })
    })
})