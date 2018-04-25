/* global describe beforeEach it */

import {expect} from 'chai';
import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Reviews from './Reviews';

describe('Reviews component', () => {
    let singleInstrument = {}
    let singleOrderComponent;

    beforeEach(() => {
        singleOrderComponent = shallow(<Reviews singleInstrument={singleInstrument} />);
    })
  
    it('Renders an appropriate message if there are no reviews.', () => {
      expect(singleOrderComponent.find('h2').length).to.be.equal(1);
      expect(singleOrderComponent.find('h2').text()).to.be.deep.equal(`There are no reviews for this product`)
    })
})