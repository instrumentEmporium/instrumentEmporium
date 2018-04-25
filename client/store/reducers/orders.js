import axios from 'axios';

// ACTION TYPES
<<<<<<< HEAD
=======

>>>>>>> master
const GET_ORDERS = 'GET_ORDERS';

// ACTION CREATOR
export const getOrders = orders => ({
    type: GET_ORDERS,
    orders
});

<<<<<<< HEAD
// THUNK CREATORS
=======
// THUNK CREATOR

>>>>>>> master
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

<<<<<<< HEAD
export const fetchOrdersByUserId = (userId) => {
  return dispatch => {
      return axios.get(`/api/orders/${userId}`)
      .then(res => res.data)
      .then(orders => {
          const action = getOrders(orders);
          dispatch(action);
      })
      .catch(err => console.error(err));
  }
};


=======
>>>>>>> master
// SUBREDUCER
export default function orderReducer(state = [], action) {
    switch (action.type) {
        case GET_ORDERS:
            return action.orders;
        default:
            return state;
    }
}
