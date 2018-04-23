import React from 'react'

import {Navbar} from './components'
import Routes from './routes'

//place initial loading in here since it will always be accessed first & you can `mapStateToProps` for other components

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
