const db = require('../db');
const Order = db.model('order');
const request = require('supertest');
const app = require('../index');
const {expect} = require('chai');

describe('cart route', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe(` POST /api/carts`, () => {
    const cartObj = {
      id: 1, price: 100, quantity: 1
    };

    it('sends the newly created cart object with an items array of length 1', () => {
      return request(app)
        .post(`/api/carts/`, cartObj)
        .expect(201)
        .then(res => {
          expect(res.body).to.be.an('object')
          expect(res.body.items).to.be.an('array');
          expect(res.body.items.length).to.be.equal(1);
      });
    });
  })
});
