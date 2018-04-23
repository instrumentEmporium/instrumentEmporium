import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Login, Signup, UserHome} from './components';
import {me, fetchCart, fetchInstruments} from './store';
import InstrumentListContainer from './containers/InstrumentListContainer';
import SingleInstrumentContainer from './containers/SingleInstrumentContainer';
import HomeContainer from './containers/HomeContainer';
import CartContainer from './containers/CartContainer'
import EditAccount from './components/EditAccount';
import CheckoutContainer from './containers/CheckoutContainer';

import AdminContainer from './containers/AdminContainer';
import SingleOrderContainer from './containers/SingleOrderContainer';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData();
  }

  render () {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/instruments" component={InstrumentListContainer} />
        <Route exact path="/instruments/:id" component={SingleInstrumentContainer} />
        <Route exact path="/carts/:id" component={CartContainer} />
        <Route exact path= "/carts/:id/checkout" component={CheckoutContainer} />
        {
          isLoggedIn &&
            <Switch>
              {/* Routes placed here are only available after logging in */}
              <Route path="/myAccount" component={UserHome} />
              <Route path="/editAccount" component={EditAccount} />
              <Route exact path="/admin-dash" component={AdminContainer} />
              <Route exact path='/orders/:id' component={SingleOrderContainer} />
            </Switch>
        }
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
      dispatch(fetchCart())
      dispatch(fetchInstruments())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
