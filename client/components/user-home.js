import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {user, fetchOrdersByUserId} from '../store/';
import Order from './OrderCard';

/**
 * COMPONENT
 */
export class UserHome extends React.Component {

  componentDidMount () {
    this.props.loadOrders(this.props.id);
  }

  render(){
    const {email, name} = props;

    return (
      <div>
        <h1>Welcome to your account, {name ? name : email}</h1>
        <h3> Past Orders </h3>
          {this.props.orders.map(order => {
            return <Order key={order.id} order={order} />
          })}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    name: state.user.firstName,
    id: state.user.id,
    orders: state.orders
  }
}

const mapDispatch = dispatch => ({
  loadOrders: (userId) => {
      const action = fetchOrdersByUserId(userId);
      dispatch(action);
    }
});

export default connect(mapState)(mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
