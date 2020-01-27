import { combineReducers, createStore } from 'redux';
import bookReducer from './books';

const rootReducer = combineReducers({
  bookReducer,
});

export default createStore(rootReducer);
