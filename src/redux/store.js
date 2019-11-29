import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(thunk);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default { store };