import axios from 'axios';

// ACTION TYPES 
const GET_SINGLE_INSTRUMENT = 'GET_SINGLE_INSTRUMENT';
const REMOVE_INSTRUMENT = 'REMOVE_INSTRUMENT';
const ADD_REVIEW = 'ADD_REVIEW';

// ACTION CREATORS

export const getSingleInstrument = instrument => ({
    type: GET_SINGLE_INSTRUMENT,
    instrument: instrument
})

export const removeInstrument = instrument => ({
    type: REMOVE_INSTRUMENT,
    instrument: instrument
})

export const addReview = review => ({
    type: ADD_REVIEW,
    review: review
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

export const fetchDeleteInstrument = id => {
    return dispatch => {
        return axios
            .delete(`api/instruments/${id}`)
            .then(res => res.data)
            .then(instrumentToDelete => {
                const action = removeInstrument(instrumentToDelete)
                dispatch(action);
            });
    }
}

export const postReview = (review, instrumentId) => {
    return dispatch => {
        return axios
            .post(`/api/instruments/reviews/${instrumentId}`, review)
            .then(res => res.data)
            .then(reviewToAdd => {
                const action = addReview(reviewToAdd)
                dispatch(action);
            })
    }
}

// REDUCER

export default function reducer(state = {}, action) {
    switch (action.type) {
        case GET_SINGLE_INSTRUMENT:
            return action.instrument
        case REMOVE_INSTRUMENT:
            return action.instrument;
        case ADD_REVIEW:
            return Object.assign({}, state, state.reviews.concat(action.review))
        default:
            return state;
    }
};