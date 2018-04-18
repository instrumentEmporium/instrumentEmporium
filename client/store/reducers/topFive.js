import axios from 'axios';

// ACTION TYPES 
const GET_TOP_FIVE = 'GET_TOP_FIVE';

// ACTION CREATORS

export function getTopFive (topFive) {
    const action = { type: GET_TOP_FIVE, topFive};
    return action;
}

// THUNKS

export function fetchTopFive () {
    return function thunk(dispatch) {
        return axios.get('/api/instruments/top-five')
        .then(res => res.data)
        .then(instruments => {
            const action = getTopFive(instruments)
            dispatch(action);
        })
    }
}

// REDUCER

export default function reducer (state = [], action) {
    switch (action.type) {
        case GET_TOP_FIVE:
            return action.topFive;
        default:
            return state;
    }
}
