import axios from 'axios';

// ACTION TYPES 
const GET_SINGLE_ORDER = 'GET_SINGLE_ORDER';

// ACTION CREATOR 
export const getSingleOrder = order => {
    type: GET_SINGLE_ORDER,
    order
}
// THUNK CREATOR 

export const fetchOrder = () => {
    return dispatch => {
        return axios.get(`/api/orders/${id}`)
        .then(res => res.data)
        .then(order => {
            const action = getSingleOrder(order);
            dispatch(action);
        })
        .catch(err => console.error(err));
    }
};

// SUBREDUCER
export default function orderReducer(state = {}, action) {
    switch(action.type) {
        case GET_SINGLE_ORDER:
            return action.order;
        default:
            return state;
    }
}
