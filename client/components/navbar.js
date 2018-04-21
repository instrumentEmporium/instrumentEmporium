import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'
import { Menu, Segment, Icon } from 'semantic-ui-react';

const Navbar = ({ handleClick, isLoggedIn, admin }) => (
  <div>

    <Segment inverted>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Menu inverted>
          <Menu.Item as={Link} to="/" name="Home" />
          <Menu.Item as={Link} to="/instruments" name="Instruments" />
          {admin ? <Menu.Item as={Link} to="/admin-dash" name="Admin" /> : null}
          <Menu.Menu position="right">
            <Menu.Item as={Link} to="/cart">
            <Icon name="cart" size="large" color="teal" />
            </Menu.Item>
            <Menu.Item as={Link} to="/myAccount" name="My Account" />
            <Menu.Item name="Logout" onClick={handleClick} />
          </Menu.Menu>
          </Menu>
        </div>
      ) : (
          <Menu inverted>
            {/* The navbar will show these links before you log in */}
            <Menu.Item as={Link} to="/" name="Home" />
            <Menu.Item as={Link} to="/instruments" name="Instruments" />
            <Menu.Menu position="right">
              <Menu.Item as={Link} to="/login" name="Login" />
              <Menu.Item as={Link} to="/signup" name="Signup" />
              <Menu.Item as={Link} to="/cart">
                <Icon name="cart" size="large" color="teal" />
              </Menu.Item>
            </Menu.Menu>
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
    isLoggedIn: !!state.user.id,
    admin: state.user.admin
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
  isLoggedIn: PropTypes.bool.isRequired,
  admin: PropTypes.bool
}
