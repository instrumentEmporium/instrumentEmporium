import axios from 'axios';

// ACTION TYPES 
const GET_ORDERS = 'GET_ORDERS';

// ACTION CREATOR 
export const getOrders = orders => ({
    type: GET_ORDERS,
    orders
});

// THUNK CREATOR 
export const fetchOrders = () => {
    return dispatch => {
        return axios.get(`/api/orders`)
        .then(res => res.data)
        .then(orders => {
            const action = getOrders(orders);
            dispatch(action);
        })
        .catch(err => console.error(err));
    }
};


// SUBREDUCER
export default function orderReducer(state = [], action) {
    switch(action.type) {
        case GET_ORDERS:
            return action.orders;
        default:
            return state;
    }
}
