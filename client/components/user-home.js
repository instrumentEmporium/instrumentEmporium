import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import user from '../store/reducers/user';

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const {email, name} = props

  return (
    <div>
      <h1>Welcome to your account, {name}</h1>
      <h3> SHOW PAST ORDERS HERE I GUESS </h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    name: state.user.firstName
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
