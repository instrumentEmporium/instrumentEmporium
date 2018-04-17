import React from 'react';
import {createStore} from 'redux';
import {expect} from 'chai';

import reducer from '../../client/store/reducers/instrument';
// import {MESSAGES_RECEIVED, MESSAGES_LOADING, NEW_MESSAGE} from '../../react/redux/constants';
// import {createLoadingAction, createMessagesReceivedAction, createNewMessageAction} from '../../react/redux/actions';


describe('store/reducers/instrument', () => {

  let testingStore;
  beforeEach('Create testing store from reducer', () => {
      testingStore = createStore(reducer);
  });

  it('has an initial state as described', () => {
      const currentStoreState = testingStore.getState();
      // Our initial state has two properties as shown.
      expect(currentStoreState.instruments).to.be.equal(false);
      expect(currentStoreState.instruments).to.be.deep.equal([]);
  })
})