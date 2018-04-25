/* global describe beforeEach it */

import {expect} from 'chai';
import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OrderCard from './OrderCard';

const adapter = new Adapter();
enzyme.configure({adapter});

describe('OrderCard', () => {
    let oneOrder = {id: 4, fulfilled: 'true'}
    let singleOrderComponent;

    beforeEach(() => {
        singleOrderComponent = shallow(<OrderCard order={oneOrder} />);
    })
  
    it('Renders a order status header.', () => {
      expect(singleOrderComponent.find('h2').length).to.be.equal(1);
      expect(singleOrderComponent.find('h2').text()).to.be.deep.equal(`Status: true`)
    })
})