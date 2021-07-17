import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

import thunk from 'redux-thunk';
import reducer from './reducer';
const initialState = {};
const middleware = [thunk];

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducer, initialState, enhancer);
export const persistor = persistStore(store);
console.log(persistor.getState());
export default store;
