import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {user, fetchOrdersByUserId} from '../store/';
import { Grid, Container, Image} from 'semantic-ui-react';

/**
 * COMPONENT
 */
export class UserHome extends React.Component {

  componentDidMount () {
    this.props.loadOrders(this.props.id);
  }

  render(){
    const {email, name, orders, instruments} = this.props;

    return (
      <div>
        <h1>Welcome to your account, {name ? name : email}</h1>
        <h3> Past Orders </h3>
          {orders && orders.map(order => {
            return (
              <Grid celled key={order.id}>
              <h3> Order #{order.id}</h3>
                <Grid.Column width={3}>
                  {
                    order.items.map(item => {
                      let foundItem = instruments.find(instrument => instrument.id === item.id);
                      return (
                        <Container key={item.id}>
                          <Image src={foundItem && foundItem.imageUrl} />
                          <Grid.Column width={8}>
                            <Grid.Row>
                              <h3>Name: {foundItem && foundItem.name}</h3>
                            </Grid.Row>
                            <Grid.Row>
                              <h3>Price: ${foundItem && foundItem.price}</h3>
                            </Grid.Row>
                          </Grid.Column>
                        </Container>
                      )
                    })
                  }
                </Grid.Column>
              </Grid>
            )
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
    orders: state.orders,
    instruments: state.instruments
  }
}

const mapDispatch = dispatch => ({
  loadOrders(userId){
      const action = fetchOrdersByUserId(userId);
      dispatch(action);
    }
});

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
