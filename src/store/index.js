import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';

const appReducer = combineReducers(reducers);

const middlewares = [thunkMiddleware];

export const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
