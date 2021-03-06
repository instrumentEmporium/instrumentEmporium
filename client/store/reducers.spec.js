import { expect } from 'chai';
import { fetchInstruments, fetchOneInstrument } from './reducers/instruments';
import { fetchTopFive } from './reducers/topFive';
import { postCart } from '../store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store;
  let mockAxios;

  let initialState = { instruments: [], topFive: [] };

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    store = mockStore(initialState);
  })

  afterEach(() => {
    mockAxios.restore();
    store.clearActions();
  })

  describe('fetchInstruments', () => {
    it('eventually dispatches the GET_INSTRUMENTS action', () => {
      const fakeInstArr = [{ 'id': 1, 'name': 'piano' }];
      mockAxios.onGet('/api/instruments').replyOnce(200, fakeInstArr);
      return store.dispatch(fetchInstruments())
        .then(() => {
          const actions = store.getActions();
          expect(actions[0].type).to.be.equal('GET_INSTRUMENTS');
          expect(actions[0].instruments).to.be.deep.equal(fakeInstArr);
        })
    })
  })

  describe('fetchOneInstrument', () => {
    it('eventually dispatches the UPSERT_INSTRUMENT action', () => {
      const fakeInst = { 'id': 1, 'name': 'piano' };
      mockAxios.onGet('/api/instruments/1').replyOnce(200, fakeInst);
      return store.dispatch(fetchOneInstrument(1))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).to.be.equal('UPSERT_INSTRUMENT');
        expect(actions[0].singleInstrument).to.be.deep.equal(fakeInst);
      })
    })
  })

  initialState = { cart: {} }

  describe('postCart', () => {
    it('returns the newly created cart as an object with an items array including the item passed in', () => {
      const fakeInst = {id: 1, price: 100, quantity: 1};
      mockAxios.onPost(`/api/carts`).replyOnce(204, fakeInst);
      return store.dispatch(postCart(fakeInst))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].cart).to.be.deep.equal(fakeInst);
      })
    })
  })

  initialState = { topFive: {} }

  describe('getTopFive', () => {
    it('eventually dispatches the GET_TOP_FIVE action', () => {
      const fakeTopFive = [
        {id: 1, name: 'Test guitar'},
        {id: 2, name: 'Test tuba'},
        {id: 3, name: 'Test piano'},
        {id: 4, name: 'Test drum'},
        {id: 5, name: 'Test zanzibar'}
      ];

      mockAxios.onGet('/api/instruments/top-five').replyOnce(200, fakeTopFive);
      return store.dispatch(fetchTopFive(fakeTopFive))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).to.be.equal('GET_TOP_FIVE');
        expect(actions[0].topFive).to.be.deep.equal(fakeTopFive);
      })
    })
  })
})
