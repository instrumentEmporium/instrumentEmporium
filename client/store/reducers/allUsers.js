import axios from 'axios';

// ACTION TYPES

const GET_ALL_USERS = 'GET_ALL_USERS';

// ACTION CREATOR

export const getAllUsers = users => ({
    type: GET_ALL_USERS,
    users
});

// THUNK CREATOR

export const fetchUsers = () => {
    return dispatch => {
        return axios.get(`/api/users`)
        .then(res => res.data)
        .then(users => {
            const action = getAllUsers(users);
            dispatch(action);
        })
        .catch(err => console.error(err));
    }
};

// SUBREDUCER
export default function orderReducer(state = [], action) {
    switch (action.type) {
        case GET_ALL_USERS:
            return action.users;
        default:
            return state;
    }
}
