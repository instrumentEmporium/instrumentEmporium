import { connect } from 'react-redux';

import AdminPage from '../components/AdminPage';
import { fetchUsers, fetchOrders, fetchInstruments, fetchDeleteInstrument } from '../store';

const mapStateToProps = (state) => ({
    users: state.allUsers,
    orders: state.orders,
    instruments: state.instruments,
    admin: state.user.admin
});

const mapDispatchToProps = (dispatch) => ({
  loadOrders: () => {
    const action = fetchOrders();
    return dispatch(action);
  },
  loadUsers: () => {
    const action = fetchUsers();
    return dispatch(action);
  },
  loadInstruments: () => {
    const action = fetchInstruments();
    return dispatch(action);
  },
  deleteInstrument: (id) => {
    const action = fetchDeleteInstrument(id);
    return dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
