const {expect} = require('chai');
const db = require('../index');
const Order = db.model('order');


describe('Order Model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  });

  it('requires an order to have a status of fulfilled or unfulfilled', () => {
    const order = Order.build();
    return order.validate()
      .then(() => { throw new Error('Promise should have rejected');})
      .catch(err => {
        expect(err).to.exist;
        expect(err).to.be.an('error');
      });
  });
})
