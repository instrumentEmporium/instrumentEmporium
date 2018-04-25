/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {UserHome} from './user-home'
import {user, fetchOrdersByUserId} from '../store/';


const adapter = new Adapter()
enzyme.configure({adapter})

describe('UserHome', () => {
  let userHome

  beforeEach(() => {
    userHome = shallow(<UserHome name={'Cody'} loadOrders={() => {}}/>)
  })

  it('renders the email in an h3', () => {
    expect(userHome.find('h1').text()).to.be.equal('Welcome to your account, Cody')
  })

  it('renders past orders header', () => {
    expect(userHome.find('h3').text()).to.be.equal(' Past Orders ')
  })
  
})


