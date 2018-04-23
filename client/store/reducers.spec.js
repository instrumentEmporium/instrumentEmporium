import { expect } from 'chai'
import { fetchInstruments, fetchOneInstrument } from './reducers/instruments'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = { instruments: [] }

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchInstruments', () => {
    it('eventually dispatches the GET_INSTRUMENTS action', () => {
      const fakeInstArr = [{ 'id': 1, 'name': 'piano' }]
      mockAxios.onGet('/api/instruments').replyOnce(200, fakeInstArr)
      return store.dispatch(fetchInstruments())
        .then(() => {
          const actions = store.getActions()
          expect(actions[0].type).to.be.equal('GET_INSTRUMENTS')
          expect(actions[0].instruments).to.be.deep.equal(fakeInstArr)
        })
    })
  })
  
  describe('fetchOneInstrument', () => {
    it('eventually dispatches the UPSERT_INSTRUMENT action', () => {
      const fakeInst = { 'id': 1, 'name': 'piano' }
      mockAxios.onGet('/api/instruments/1').replyOnce(200, fakeInst)
      return store.dispatch(fetchOneInstrument(1))
      .then(() => {
        const actions = store.getActions()
        expect(actions[0].type).to.be.equal('UPSERT_INSTRUMENT')
        expect(actions[0].singleInstrument).to.be.deep.equal(fakeInst)
      })
    })
  })
})
