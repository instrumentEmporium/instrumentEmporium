/* global describe beforeEach it */

import {expect} from 'chai';
import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Instrument from './Instrument';

const adapter = new Adapter();
enzyme.configure({adapter});

describe('Instrument', () => {
  let sampleInstrument = {id: 1, name: 'test guitar', type: 'string'}
  let instrumentComponent;

  beforeEach(() => {
    instrumentComponent = shallow(<Instrument instrument={sampleInstrument} />);
  })

  it('renders a header with ', () => {
    expect(instrumentComponent.find('h3').length).to.be.equal(1);
    expect(instrumentComponent.find('h3').text()).to.be.deep.equal(sampleInstrument.name)
  })
})

// Example Action Creator from file '../store
// export function addTodo(text) {
//   return {
//     type: 'ADD_TODO',
//     text
//   }
// }

// set specific action names
// import * as actions from '../../actions/TodoActions'
// // set specific action types
// import * as types from '../../constants/ActionTypes'

// describe('actions', () => {
//   it('should create an action to add a todo', () => {
//     const text = 'Finish docs'
//     const expectedAction = {
//       type: types.ADD_TODO,
//       text
//     }
//     expect(actions.addTodo(text)).toEqual(expectedAction)
//   })
// })