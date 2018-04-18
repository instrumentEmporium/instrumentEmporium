import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'
import { Menu, Segment, Icon } from 'semantic-ui-react';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>

    <Segment inverted>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/myAccount">My Account</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
          <Menu inverted>
            {/* The navbar will show these links before you log in */}
            <Menu.Item as={ Link } to="/" name='Home' />
            <Menu.Item as={ Link } to="/instruments" name='Instruments' />
            <Menu.Item as={ Link } to="/login" name='Login' style={{left: '75%'}} />
            <Menu.Item as={ Link } to="/signup" name='Signup' style={{left: '75%'}} />
            <Menu.Item as={ Link } to="/cart" style={{left: '75%'}}>
              <Icon name="cart" size="large" color="teal" />
            </Menu.Item>
          </Menu>
        )}
    </Segment>

  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
