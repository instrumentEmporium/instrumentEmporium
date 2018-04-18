import axios from 'axios';

// ACTION TYPES 
const GET_SINGLE_INSTRUMENT = 'GET_SINGLE_INSTRUMENT';

// ACTION CREATORS

export const getSingleInstrument = instrument => ({
    type: GET_SINGLE_INSTRUMENT,
    instrument: instrument
})

// THUNKS

export const fetchSingleInstrument = id => {
    return dispatch => {
        return axios
            .get(`/api/instruments/${id}`)
            .then(res => res.data)
            .then(instrument => {
                const action = getSingleInstrument(instrument);
                dispatch(action);
            });
    }
}

// REDUCER

export default function reducer(state = {}, action) {
    switch (action.type) {
        case GET_SINGLE_INSTRUMENT:
            return action.instrument
        default:
            return state;
    }
}