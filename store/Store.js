import { createStore, combineReducers } from 'redux';
import counter from './reducers/Counter';

const store = createStore(
  combineReducers({
    counter,
  })
);

export default store;
