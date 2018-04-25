/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Instrument = db.model('instrument')

describe('Instrument Model', () => {
    beforeEach(() => {
        return db.sync({force: true})
    })

        describe('Returns correct values', () => {
            let tuba;


            beforeEach(() => {
                return Instrument.create({
                    name: 'tuba',
                    type: 'brass',
                    price: 5,
                    quantity: 1,
                    imageUrl: 'hhtp:fakeurl.com',
                    description: 'Im testing this tuba',
                    rating: 4,
                    audioUrl: 'the sound of a tuba'
                })
                .then(instrument => {
                    tuba = instrument
                })
            })
            it('returns correct quantity', () => {
                expect(tuba.quantity).to.be.equal(1)
            })

          })
        })

      describe('Proper form validation', () => {
          let tabla;
          beforeEach(() => {
            return Instrument.create({
              name: 'tabla',
              type: 'percussion',
              price: 210,
              quantity: 2,
              imageUrl: 'http://fillmurray.com',
              description: 'I love this tabla',
              rating: 4,
              audioUrl: 'an audio url'
            })
            .then(instrument => {
              tabla = instrument
            })
          })

          it('should check if the instrument fields were set correctly', () => {
            expect(tabla.rating).to.be.equal(4);
          })


      })
