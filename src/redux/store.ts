import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import { MakeStore } from 'next-redux-wrapper';

import { rootReducer } from './reducers';
import epics from '@epics/index';

export const makeStore: MakeStore = (initialState, options) => {
  // console.info ('store options', options);
  const epicMiddleware = createEpicMiddleware ({
    dependencies: {}
  });
  const store = createStore (
    rootReducer, initialState, applyMiddleware (thunk, epicMiddleware)
  );
  epicMiddleware.run (epics);
  return store;
};
