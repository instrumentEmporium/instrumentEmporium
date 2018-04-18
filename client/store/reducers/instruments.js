import axios from 'axios';

//ACTION TYPES
const GET_INSTRUMENTS = 'GET_INSTRUMENTS';
const UPSERT_INSTRUMENT = 'UPSERT_INSTRUMENT';

//ACTION CREATORS
export const getInstruments = instruments => ({
  type: GET_INSTRUMENTS,
  instruments
});

export const upsertInstrument = instrument => ({
  type: UPSERT_INSTRUMENT,
  singleInstrument: instrument
});


//THUNK CREATORS
export const fetchInstruments = () => {
  return dispatch => {
    return axios
      .get('/api/instruments')
      .then(res => res.data)
      .then(instruments => {
        const action = getInstruments(instruments);
        dispatch(action);
      });
  };
};

export const fetchOneInstrument = id => {
  return dispatch => {
    return axios
      .get(`/api/instruments/${id}`)
      .then(res => res.data)
      .then(instrument => {
        const action = upsertInstrument(instrument);
        dispatch(action);
      });
  };
};


//REDUCER
export default function instrumentReducer(state = [], action) {
  switch (action.type) {
    case GET_INSTRUMENTS:
      return action.instruments;
    case UPSERT_INSTRUMENT:
      return state.filter(
        instrument => instrument.id !== action.singleInstrument.id
      )
      .concat(action.singleInstrument);
    default:
      return state;
  }
}
