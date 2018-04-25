/* global describe beforeEach it */

import {expect} from 'chai';
import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Instrument from './Instrument';
import Home from './Home';

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

describe('Single Instrument', () => {
  let sampleInstrument = [{id: 1, name: 'piano', price: 200, type: 'keyboard', quantity: 2, rating: 4}, {id: 1, name: 'piano', price: 200, type: 'keyboard', quantity: 2, rating: 4}, {id: 1, name: 'piano', price: 200, type: 'keyboard', quantity: 2, rating: 4}, {id: 1, name: 'piano', price: 200, type: 'keyboard', quantity: 2, rating: 4}, {id: 1, name: 'piano', price: 200, type: 'keyboard', quantity: 2, rating: 4}];
  let homeComponent;

  beforeEach(() => {
    homeComponent = shallow(<Home topFive={sampleInstrument} />);
  })

  it('renders the home component and top five products', () => {
    expect(homeComponent.find('h1').length).to.be.equal(1);
  })
})
