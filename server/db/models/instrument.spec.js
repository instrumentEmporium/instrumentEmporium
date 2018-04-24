/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Instrument = db.model('instrument')

describe('Instrument Model', () => {
    beforeEach(() => {
        return db.sync({force: true})
    })

    describe('instanceMethods', () => {
        describe('Correct Validations', () => {
            let tuba;
    
            beforeEach(() => {
                return Instrument.create({
                    name: 'tuba',
                    type: 'brass',
                    price: -5,
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
    
            it('returns validation error if quantity is below zero', () => {
                expect(tuba.instrument.dataValues.quantity).to.be.equal(false)
            })
        })
    })
})